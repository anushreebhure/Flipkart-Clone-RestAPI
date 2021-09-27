const express=require("express");
const bodyParser=require("body-parser");
const mongoose=require("mongoose");

//models
const Product=require("./src/models/product");
const SignUp=require("./src/models/customers");
const Supplier=require("./src/models/supplier")
const Order=require("./src/models/orders")
const Address=require("./src/models/address")
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
//define app
const app=express();




//use the body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false})); 

//establish db connection
const db=mongoose.connect("mongodb+srv://anushree23:8668445791anu@flipkart-clone.23z5y.mongodb.net/Flipkart-Clone?retryWrites=true&w=majority")
mongoose.connection.on('error',err=>{
    console.log('connection failed')
});
mongoose.connection.on('connected',connected=>{
    console.log('connected')

});
//define routes/pages
app.get('/',function(request, response){
    response.send({ping:'Pong'})
})
//define routes to create,read,update and delete products(CRUD)
app.post('/products',function(request,response){
    var product=new Product()
    product.name=request.body.name
    product.id=request.body.id
    product.product_price=request.body.product_price
    product.quantity=request.body.quantity
    product.save(function(error, savedProduct){
        if(error){
            response.status(500).send({error:"Not found"})
        }else{
            response.status(200).send(savedProduct)
        }
    })

})
app.get('/products',function(request,response){
    var product=new Product()
    product.name=request.body.name
    product.id=request.body.id
    product.product_price=request.body.product_price
    product.quantity=request.body.quantity
    product.save(function(error, savedProduct){
        if(error){
            response.status(500).send({error:"Not found"})
        }else{
            response.status(200).send(savedProduct)
        }
    })

})

app.post('/orders',function(request,response){
    var order=new Order()
    order.order_id=request.body.order_id
    order.customer_id=request.body.customer_id
    order.date_order_placed=request.body.date_order_placed
    order.order_price=request.body.order_price
    order.order_code=request.body.order_code
    order.delivery_address=request.body.delivery_address
    order.date_reported=request.body.date_reported
    order.delivery_status_code=request.body.delivery_status_code
    order.quantity=request.body.quantity
    order.save(function(error, savedOrder){
        if(error){
            response.status(500).send({error:"Not found"})
        }else{
            response.status(200).send(savedOrder)
        }
    })

})
app.get('/orders',function(request,response){
    var order=new Order()
    order.order_id=request.body.order_id
    order.customer_id=request.body.customer_id
    order.date_order_placed=request.body.date_order_placed
    order.order_price=request.body.order_price
    order.order_code=request.body.order_code
    order.delivery_address=request.body.delivery_address
    order.date_reported=request.body.date_reported
    order.delivery_status_code=request.body.delivery_status_code
    order.quantity=request.body.quantity
    order.save(function(error, savedOrder){
        if(error){
            response.status(500).send({error:"Not found"})
        }else{
            response.status(200).send(savedOrder)
        }
    })

})
app.post('/address',function(request,response){
    var address=new Address()
    address.type_id=request.body.type_id
    address.line1_building=request.body.line1_building
    address.line2_street=request.body.line2_street
    address.line3_area=request.body.line3_area
    address.city=request.body.city
    address.state=request.body.state
    address.country=request.body.country
    address.zip_postcode=request.body.zip_postcode
    address.country_code=request.body.country_code
    address.save(function(error, savedAddress){
        if(error){
            response.status(500).send({error:"Not found"})
        }else{
            response.status(200).send(savedAddress)
        }
    })

})
app.get('/address',function(request,response){
    var address=new Address()
    address.type_id=request.body.type_id
    address.line1_building=request.body.line1_building
    address.line2_street=request.body.line2_street
    address.line3_area=request.body.line3_area
    address.city=request.body.city
    address.state=request.body.state
    address.country=request.body.country
    address.zip_postcode=request.body.zip_postcode
    address.country_code=request.body.country_code
    address.save(function(error, savedAddress){
        if(error){
            response.status(500).send({error:"Not found"})
        }else{
            response.status(200).send(savedAddress)
        }
    })

})
app.post('/supplier',function(request,response){
    var supplier=new Supplier()
    supplier.supplier_id=request.body.supplier_id,
    supplier.name=request.body.name,
    supplier.address=request.body.address
    supplier.save(function(error, savedSupplier){
        if(error){
            response.status(500).send({error:"Not found"})
        }else{
            response.status(200).send(savedSupplier)
        }
    })

})
app.get('/supplier',function(request,response){
    var supplier=new Supplier()
    supplier.supplier_id=request.body.supplier_id,
    supplier.name=request.body.name,
    supplier.address=request.body.address
    supplier.save(function(error, savedSupplier){
        if(error){
            response.status(500).send({error:"Not found"})
        }else{
            response.status(200).send(savedSupplier)
        }
    })

})
app.post('/customers',(req,res,next)=>{
    bcrypt.hash(req.body.password,10,(err,hash)=>{
        if(err){
            return res.status(500).json({
                error:err
            })
        }
        else{
            const signup=new SignUp({
            username:req.body.username,
            password:hash,
            male_or_female:req.body.male_or_female,
            email:req.body.email,
            customer_id:req.body.customer_id
            })
            
            signup.save()
            .then(result=>{
                res.status(200).json({
                    new_user:result
                })
            })
            .catch(err=>{
                res.status(500).json({
                    erro:err
                })
            })

        }
    })
})
app.post('/login',(req,res,next)=>{
    SignUp.find({username:req.body.username})
    .exec()
    .then(user=>{
        if(user.length<1){
            return res.status(401).json({
                msg:'User does not exist'
            })
        }
        bcrypt.compare(req.body.password,user[0].password,(err,result)=>{
            if(!result){
                return res.status(401).json({
                    msg:'Password does not match'
                })
            }
            if(result){

                const token=jwt.sign({
                    username:user[0].username,
                    email:user[0].email,
                    phone:user[0].phone,

                },
                'this is dummy text',{
                    expiresIn:"48h"
                })
                res.status(200).json({
                    username:user[0].username,
                    email:user[0].email,
                    phone:user[0].phone,
                    token:token

                })
            }
        })

    })
    .catch(err=>{
        res.status(500).json({
            err:err
        })
    })

})

//start server
app.listen(3000,function(){
    console.log("Flipkart Clone Server running at port 3000")
})
