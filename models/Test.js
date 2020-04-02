
const mongoose =require('mongoose');

const Schema =mongoose.Schema;


const TestSchema =new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    testResult: {
        type:Number,
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

module.exports =mongoose.model('test',TestSchema);  