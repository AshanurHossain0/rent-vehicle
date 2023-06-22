const mongoose=require("mongoose")

const vehicleSchema=new mongoose.Schema({
    
    name:{type:String,required:true},
    type:{type:String,required:true,enum:["car","bike"]},
    isBooked:{type:Boolean,default:false}
})

module.exports=mongoose.model("Vehicle",vehicleSchema)