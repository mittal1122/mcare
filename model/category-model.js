const mongoose =require("mongoose");
const { boolean } = require("webidl-conversions");

//schema

let CategorySchema =new mongoose.Schema({
    categoryName:{
        type:String
    },
    isActive:{    
        type:boolean
        
    }
})

//model

let CategoryModel = mongoose.model("category",CategorySchema) 

module.exports = CategoryModel