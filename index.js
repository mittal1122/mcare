const express =require("express")
const mongoose = require("mongoose")


const roleController= require("./controller/role-controller.js")
const storeController = require("./controller/store-controller")
const userController = require("./controller/user-controller")
const categoryController= require("./controller/category-controller")
const subcategoryController= require("./controller/sub_category-controller")
const productController = require("./controller/product_controller")


const app = express()

// express is middle ware  
app.use(express.json())  //express run server live  
app.use(express.urlencoded({extended:true}))   //for create or scan emogis or othen sign 


//database
mongoose.connect('mongodb://localhost:27017/mcare',function(err)   //for link db to server
{
    if(err){
    console.log("db connection fail...");
    console.log(err)
    }
    else{

        console.log('db connected...')
    }

})

//roles
app.post("/roles",roleController.addRole)
app.get("/roles",roleController.getAllRoles)
app.delete("/roles/:roleId",roleController.deleteRole)
app.put("/roles",roleController.updateRole)

//stores
app.post("/stores",storeController.addStore)
app.get("/stores",storeController.getAllStores)
app.delete("/stores/:storeId",storeController.deleteStore)
app.put("/stores",storeController.updateStore)

//users
app.post("/users",userController.addUser)
app.get("/users",userController.getAllUsers)
app.delete("/users/:userId",userController.deleteUser)
app.put("/users",userController.updateUser)
app.post("/login",userController.login)

//category
app.post("/categories",categoryController.addCategories)
app.get("/categories",categoryController.getAllCategories)
app.delete("/categories/:categoryId",categoryController.deleteCategory)
app.put("/categories",categoryController.updateCategory)

//subcategory
app.post("/subcategories",subcategoryController.addSubcategory)
app.get("/subcategories",subcategoryController.getAllSubcategories)
app.delete("/subcategories/:subcategoryId",subcategoryController.deleteSubcategory)
app.put("/subcategories",subcategoryController.updateSubcategory)


//product
app.post("/products",productController.addProduct)
app.get("/products",productController.getAllproducts)
app.delete("/products/:productId",productController.deleteProduct)
app.put("/products",productController.updateProduct)

//server
app.listen(3001,function(){
    console.log("server started on 3001")
})










