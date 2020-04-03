const mongoose =require('mongoose');
const Schema =mongoose.Schema;
const ProblemSchema =new Schema({
    
    cin: {
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    },
    place:{
        type:String,
        required:true
    },
    phone: {
        type:String
    },
    date: {
        type:Date,
        default:Date.now
    },
});

module.exports =mongoose.model('problem',ProblemSchema);  