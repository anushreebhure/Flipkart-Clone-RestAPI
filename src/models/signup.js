const mongoose=require("mongoose");
const{ Schema }=mongoose;
const signupSchema=new Schema({
    username:String,
    male_or_female:String,
    email_id:String,
    password:String,
    customer_id:Number
})
module.exports=mongoose.model('SignUp',signupSchema);