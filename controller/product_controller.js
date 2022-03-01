const ProductModel = require("../model/product-model")

//add 
module.exports.addProduct = function(req,res){
    let productName=req.body.productName
    let price= req.body.price
    let MFD = req.body.MFD
    let EXD = req.body.EXD
    let qty = req.body.qty
    let discription = req.body.discription
    let category= req.body.category
    let subcategory=req.body.subcategory
    let company =req.body.company

    let product= new ProductModel({
        productName:productName,
        price:price,
        MFD:MFD,
        EXD:EXD,
        qty:qty,
        discription:discription,
        category:category,
        subcategory:subcategory,
        company:company
    })
    product.save(function(err,data){
        if(err){
            res.json({msg:"SMW" ,status:-1,data:err})
        }else{
            res.json({msg:"singup done",status:200,data:data})
        }
    })
}
//list
module.exports.getAllproducts=(req,res)=>{
    ProductModel.find().populate("category").populate("subcategory").populate("company").exec(function(err,data){
        if(err){
            res.json({msg:"something went wrong", data:err, status:-1})
        }
        else{
            res.json({msg:"Cities ret... ", data: data,status:200})
        }
    })
}

//delete
module.exports.deleteProduct=function(req,res){
    let productId= req.params.productId

    ProductModel.deleteOne({"_id":productId},function(err,success){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"removed...",status:200,data:success})
        }

    })
}

//update
module.exports.updateProduct=function(req,res){
    let productId = req.body.productId
    let productName=req.body.productName
    let price= req.body.price
    let MFD = req.body.MFD
    let EXD = req.body.EXD
    let qty = req.body.qty
    let discription = req.body.discription
    let category= req.body.category
    let subcategory=req.body.subcategory
    let company =req.body.company

    ProductModel.updateOne({_id:productId},{productName:productName,price:price,MFD:MFD,EXD:EXD,qty:qty,discription:discription,category:category,subcategory:subcategory,company:company},function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"updated...",status:200,data:data})
        }
    })
}