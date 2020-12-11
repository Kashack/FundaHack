const express = require('express');
const app = express.Router();
const OpenTok = require('opentok')
const sessions = require('../models/session')
const recording = require('../models/recording')
const broadcasted = require('../models/live')
const auth = require('./authentication')
const authz = require('./authorization')

const opentok = new OpenTok(process.env.vonApiKey, process.env.vonApiSecret);

app.use(auth())

function session(){
    // A Session with an automatic archiving
    return opentok.createSession({ mediaMode:'routed', archiveMode:'always'}, function(err, session) {
        if (err) {console.log(err); return}
    
        // save the sessionId
        return session
    });
}

function generateToken(email){
    var token = opentok.generateToken(sessionId, {
        expireTime :   (new Date().getTime() / 1000)+(1 * 24 * 60 * 60), // in one week
        data :          `email=${email}`
    });
    return token
}

function generateTokenMaster(email){
    var token = opentok.generateToken(sessionId, {
        role :                   'moderator',
        expireTime :             (new Date().getTime() / 1000)+(1 * 24 * 60 * 60), // in one week
        data :                   `email=${email}`,
        initialLayoutClassList : ['focus', 'inactive']
    });
    return token
}

function startRecord(sessionId, name){
    return opentok.startArchive(sessionId, { name }, function(err, archive) {
        if (err) {
          console.log(err);
          return
        } else {
          return archive
        }
      });
}

function stopRecord(archiveId){
    return opentok.stopArchive(archiveId, function(err, archive) {
        if (err) {console.log(err); return}
      
        return  archive
    });
}

function getRecording(archiveId){
    return opentok.getArchive(archiveId, function(err, archive) {
        if (err) {console.log(err); return}
      
        return archive
      });
}

function deleteRecording(archiveId){
    return opentok.deleteArchive(archiveId, function(err) {
        if (err) return false;

        return true
      });
}

function getAllRecordings(offset, count){
    var options = {};
    if (count) {
        options.count = count;
    }
    if (offset) {
        options.offset = offset;
    }
    return opentok.listArchives(options, function(error, archives, totalCount) {
        if (err) {console.log(err); return}
      
        let list = []
        for (var i = 0; i < archives.length; i++) {
          list.push(archives[i])
        }
        return list
    });
}

function liveStart(sessionId, resolution){
    var broadcastOptions = {
        outputs: {
          hls: {}
        },
        maxDuration: 7200,
        resolution: resolution || '480x640',
        layout: {
          type: 'horizontalPresentation'
        }
      };

    return opentok.startBroadcast(sessionId, broadcastOptions, function(error, broadcast) {
        if (error) {
            console.log(error)
            return 
        }
        return broadcast
    })
}

function liveStop(broadcastId){
    return opentok.stopBroadcast(broadcastId, function(error, broadcast) {
        if (error) {
          return console.log(error);
        }
        return  broadcast
      });
}

function totalBroadcasts(offset, count){
    var options = {};
    if (count) {
        options.count = count;
    }
    if (offset) {
        options.offset = offset;
    }
    return opentok.listBroadcasts(options, function(error, broadcasts, totalCount) {
        if (error) return console.log("error:", error);
      
        let list
        for (var i = 0; i < broadcasts.length; i++) {
          list.push(broadcasts[i]);
        }
        return list
      });
}

function endSession(sessionId, connectionId){
    return opentok.forceDisconnect(sessionId, connectionId, function(error) {
        if (error) return false;
        return true
      });
}

function getStreams(sessionId){
    return opentok.listStreams(sessionId, function(error, streams) {
        if (error) {
          console.log(error.message);
        } else {
            return streams
        }
      });
}

app.get('/generatetoken/:sessionId', (req,res)=>{
    let master=false
    if(master){
        var token = generateTokenMaster(req.params.sessionId)
        res.send({token})
    }else{
        var token = generateToken(req.params.sessionId)
        res.send({token})
    }
})

app.post('/createsession', (req,res)=>{
    var sess = session()
    if(sess){
        var obj  = new sessions({
            sessionId: session.sessionId,
            email: req.body.email,
        })

        obj.save()
        res.send({session:sess})
    }else{
        res.status(500).send({message: 'An error occured, try again'})
    }
})

app.post('/startrecording',authz.videos, (req,res)=>{
    var record = startRecord(req.body.sessionId, req.body.name)
    if(record){
        var obj = new recording({
            archiveId: record.id,
            name: req.body.name,
            email: req.body.email
        })
        obj.save()
        res.send({archive:record})
    }else{
        res.status(500).send({message: 'An error occured, try again'})
    }
})

app.post('/stoprecording', authz.videos, (req,res)=>{
    var stop = stopRecord(req.body.archiveId)
    if(stop){
        res.send({archive: stop})
    }else{
        res.status(500).send({message: 'An error occured, try again'})
    }
})

app.post('/deleterecording', authz.videos, (req,res)=>{
    var del = deleteRecording(req.body.archiveId)
    if(del){
        recording.deleteOne({archiveId: req.body.archiveId}, ()=>{})
        res.status(204).send({message: 'deleted'})
    }else{
        res.status(500).send({message: 'An error occured, try again'})
    }
})

app.get('/getrecording/:archiveId', authz.videos, (req,res)=>{
    var archive = getRecording(req.params.archiveId)
    if(archive){
        res.send({archive})
    }else{
        res.status(500).send({message: 'An error occured, try again'})
    }
})

app.get('/getallrecording/:page', (req,res)=>{
    var archives = getAllRecordings(req.params.page * 30, 30)
    if(archives){
        res.send({archives})
    }else{
        res.status(500).send({message: 'An error occured, try again'})
    }
})

app.post('/startlivebroadcast', authz.broadcast, (req,res)=>{
    var broadcast = liveStart(req.body.sessionId, req.body.resolution)
    if(broadcast){
        const obj = new broadcasted({
            sessionId: req.body.sessionId,
            broadcastId: broadcast.id
        })
        obj.save()
        res.send({broadcast})
    }else{
        res.status(500).send({message: 'An error occured, try again'})
    }
})

app.post('/stoplivebroadcast', authz.broadcast, (req,res)=>{
    var broadcast = liveStop(req.body.broadcastId)
    if(broadcast){

        res.send({broadcast})
    }else{
        res.status(500).send({message: 'An error occured, try again'})
    }
})

app.get('/getlivebroadcasts/:page', (req,res)=>{
    var broadcast = totalBroadcasts(req.params.page * 30, 30)
    if(broadcast){
        res.send({broadcast})
    }else{
        res.status(500).send({message: 'An error occured, try again'})
    }
})

app.get('/getallstreams/:sessionId', authz.videos, (req,res)=>{
    var stream = getStreams(req.params.sessionId)
    if(stream){
        res.send({stream})
    }else{
        res.status(500).send({message: 'An error occured, try again'})
    }
})

module.exports = app
