const mongoose=require("mongoose");
const{ Schema }=mongoose;
const loginSchema=new Schema({
    username:String,
    male_or_female:String,
    email_id:String,
    password:String,
    customer_id:Number
})
module.exports=mongoose.model('Login',loginSchema);