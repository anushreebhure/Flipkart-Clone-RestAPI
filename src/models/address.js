const mongoose=require("mongoose");
const{ Schema }=mongoose;
const addressSchema=new Schema({
    type_id:Number,
    line1_building_number:Number,
    line2_street_number:Number,
    line3_area_locality:String,
    city:String,
    state:String,
    country:String,
    zip_postcode:Number,
    country_code:Number
})
module.exports=mongoose.model('Address',addressSchema);