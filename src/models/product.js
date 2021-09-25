const mongoose=require("mongoose");
const{ Schema }=mongoose;
const productSchema=new Schema({
    name: String,
    description: String,
    mrpPrice: Number,
    sellPrice: Number,
})
module.exports=mongoose.model('Product',productSchema);