const mongoose =require("mongoose");

//schema

let StoreSchema =new mongoose.Schema({
    storeName:{
        type:String
    }
})

//model

let StoreModel = mongoose.model("store",StoreSchema) //roles

module.exports = StoreModel