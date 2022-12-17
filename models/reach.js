const mongoose = require('mongoose');


const reachSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true,
        trim:true,

    },
    phone:{
        type : Number,
        length: 10,
        
    },
    email:{
        type : String,
        required:true
    },
    message:{
        length: 200 
    }
});

module.exports = mongoose.model('Cont',contSchema)