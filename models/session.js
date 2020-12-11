const mongoose=require('mongoose');

const user = mongoose.Schema({
    email:{type:String},
    userId:{type:String},
    sessionId:{type:String}
})

module.exports = mongoose.model('session', user)