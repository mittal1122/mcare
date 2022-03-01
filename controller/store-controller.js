const StoreModel = require("../model/store-model")


module.exports.addStore=function (req,res){

    console.log(req.body.storeName);
    

    let store= new StoreModel({
        storeName:req.body.storeName
    })

    store.save(function(err,success){
        if(err){
            // console.log(err)
            res.json({msg:"SMW", status:-1 ,data:req.body})
        }
        else{
            res.json({msg:"store added", status:200, data:success})
        }
    })
}

module.exports.getAllStores = function(req,res){

    //REST 
    StoreModel.find(function(err,stores){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"stores...",status:200,data:stores})

        }

    })

}


module.exports.deleteStore = function(req,res){
    let storeId = req.params.storeId
 
    StoreModel.deleteOne({"_id":storeId},function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"removed...",status:200,data:data})
        }
    })

}


module.exports.updateStore = function(req,res){

    let storeId = req.body.storeId 
    let storeName = req.body.storeName 

    StoreModel.updateOne({_id:storeId},{storeName:storeName},function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"updated...",status:200,data:data})
        }
    })

}