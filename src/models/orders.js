const mongoose=require("mongoose");
const{ Schema }=mongoose;
const orderSchema=new Schema({
    order_id:Number,
    customer_id:Number,
    date_order_placed:Date,
    order_price:Number,
    order_code:Number,
    delivery_address:String,
    date_reported:Number,
    delivery_status_code:Number,
    quantity:Number
})
module.exports=mongoose.model('Order',orderSchema);