const mongoose = require('mongoose')

const itemSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    desc:{
        type:String,
        required:true
    }
},{timestamp:true});

module.exports = mongoose.model("Item",itemSchema)