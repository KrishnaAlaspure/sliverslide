const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name : { type : String},
    email : { type : String},
    picture : { type : String}
})

const UserModel = mongoose.model('social-login',userSchema)
module.exports = UserModel