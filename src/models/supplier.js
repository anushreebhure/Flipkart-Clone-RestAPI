const mongoose=require("mongoose");
const{ Schema }=mongoose;
const supplierSchema=new Schema({
    supplier_id:Number,
    name:String,
    other_supplier_details:String
    
})
module.exports=mongoose.model('Supplier',supplierSchema);