const mongoose = require('mongoose');
//tshirtsche and usersche should have its own model

const TshirtScheme = new mongoose.Schema({
    color:String,
    logo:String
})
const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
    password: String,
    tshirts:[TshirtScheme],
})
// create an object that contains methods for mongoose to interface with MongoDB
const User = mongoose.model('User', UserSchema);
const Tshirt = mongoose.model('Tshirt', TshirtScheme);


module.exports = {
    TshirtScheme:TshirtScheme,
    UserSchema : UserSchema,
    User : User,
    Tshirt : Tshirt
}