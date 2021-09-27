const mongoose=require("mongoose");
const{ Schema }=mongoose;
const productSchema=new Schema({
    id:Number,
    name: String,
    product_price:Number,
    quantity:Number,
})
module.exports=mongoose.model('Product',productSchema);