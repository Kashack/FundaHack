const mongoose=require('mongoose');

const user = mongoose.Schema({
    email:{type:String},
    userId:{type:String},
    archiveId:{type:String}
})

module.exports = mongoose.model('recording', user)