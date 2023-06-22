const mongoose=require("mongoose")

const bookingSchema=new mongoose.Schema({
    fName:{
        type:String,
        required:true
    },
    lName:{
        type:String,
        required:true
    },
    vehicleId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Vehicle",
        required:true
    },
    startDate:{type:String,required:true},
    endDate:{type:String,required:true}
})

module.exports=mongoose.model("Booking",bookingSchema)