const mongoose=require('mongoose');

const user = mongoose.Schema({
    sessionId:{type:String},
    broadcastId:{type:String}
})

module.exports = mongoose.model('broadcast', user)