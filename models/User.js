const mongoose =require('mongoose');
const Schema =mongoose.Schema;
const UserSchema =new Schema({
    name: {
        type:String,
        required:true
    },
    localisation: {
        type:String,
        required:true
    },
    password: {
        type:String,
        required:true
    },
    cin: {
        type:String,
        required: true,
        unique: true
    },
    date: {
        type:Date,
        default:Date.now
    }
});

module.exports =mongoose.model('user',UserSchema);  