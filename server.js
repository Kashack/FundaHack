require('dotenv').config();
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const cors = require('cors')
//const { auth } = require('express-openid-connect');
const videos = require('./routes/video')

app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
//app.use(auth(config));

app.get('/',(req,res)=>{
    res.send('welcome to fundahacks')
})

app.use('/video',videos)

if (process.env.NODE_ENV=='development'){
    mongoose.connect(process.env.DBL,{ useNewUrlParser: true, useUnifiedTopology: true },(err,client)=>{
        //const db =client.db('local')
        console.log(client)
        //home
        //routes(app)
        app.listen(5000, () => {
            console.log('Okay, listening on port 5000');
        })
    })
    
}else{
    mongoose.connect(process.env.DB,{ useNewUrlParser: true, useUnifiedTopology: true },(err,client)=>{
        //const db =client.db('Cluster0')
        //home
        //routes(app)
        app.listen(process.env.PORT || 5000, () => {
            console.log('listening on port 5000');
        })
    })
}