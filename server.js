const express=require("express");
const bodyParser=require("body-parser");
const mongoose=require("mongoose");

//models
const Product=require("./src/models/product");

//define app
const app=express();




//use the body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false})); 

//establish db connection
const db=mongoose.connect("mongodb://localhost:27017/flipkart-clone")
//define routes/pages
app.get('/',function(request, response){
    response.send({ping:'Pong'})
})
//define routes to create,read,update and delete products(CRUD)
app.post('/products',function(request,response){
    var product=new Product()
    product.name=request.body.name
    product.description=request.body.description
    product.mrpPrice=request.body.mrpPrice
    product.sellPrice=request.body.sellPrice
    product.save(function(error, savedProduct){
        if(error){
            response.status(500).send({error:"Not found"})
        }else{
            response.status(200).send(savedProduct)
        }
    })

})

//start server
app.listen(3000,function(){
    console.log("Flipkart Clone Server running at port 3000")
})