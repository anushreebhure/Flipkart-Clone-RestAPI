const mongoose=require("mongoose");
const{ Schema }=mongoose;
const customersSchema=new Schema({
    customer_id:Number,
    username:String,
    customer_name:String,
    email:String,
    phone:Number
    
})
module.exports=mongoose.model('Customer',customersSchema);