const CategoryModel = require("../model/category-model")


module.exports.addCategories=function (req,res){
    //db insert role

    console.log(req.body.categoryName);
    console.log(req.body.isActive);

    let category= new CategoryModel({
        categoryName:req.body.categoryName,
        isActive : req.body.isActive
    })

    category.save(function(err,success){
        if(err){
            // console.log(err)
            res.json({msg:"SMW", status:-1 ,data:req.body})
        }
        else{
            res.json({msg:"category added", status:200, data:success})
        }
    })
    
}

module.exports.getAllCategories = function(req,res){
    //REST 
    CategoryModel.find(function(err,categories){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"categories...",status:200,data:categories})

        }

    })

}

module.exports.deleteCategory = function(req,res){
    let categoryId = req.params.categoryId

     
    CategoryModel.deleteOne({"_id":categoryId},function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"removed...",status:200,data:data})
        }
    })

}


module.exports.updateCategory = function(req,res){

     
    let categoryId = req.body.categoryId 
    let categoryName = req.body.categoryName
    let isActive = req.body.isActive 

    CategoryModel.updateOne({_id:categoryId},{categoryName:categoryName,isActive:isActive},function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"updated...",status:200,data:data})
        }
    })

}
