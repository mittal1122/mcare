const mongoose = require("mongoose")

const productSchema=new mongoose.Schema({
    productName:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    discription:{
        type:String,
        required:true
    },
    MFD:{
        type:String,
        required:true
    },
    EXD:{
        type:String,
        required:true
    },
    qty:{
        type:Number,
        required:true
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"category"
    },
    subcategory:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"subcategory"
    },
    company:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"company"
    }
})

const ProductModel =mongoose.model("product",productSchema)
module.exports=ProductModel