const mongoose=require('mongoose');

const user = mongoose.Schema({
    firstName:{type:String},
    lastName:{type:String},
    email:{type:String},
    dateOfBirth:{type:String},
    gender:{type:String},
    phoneNumber:{type:String},
    userId:{type:String}
})

module.exports = mongoose.model('user', user)