const mongoose=require("mongoose")

const vehicleSchema=new mongoose.Schema({
    
    name:{type:String,required:true},
    wheels:{type:Number,required:true},
    type:{type:String,required:true,enum:["car","bike","bi-cycle","bus"]},
    isBooked:{type:Boolean,default:false}
})

module.exports=mongoose.model("Vehicle",vehicleSchema)