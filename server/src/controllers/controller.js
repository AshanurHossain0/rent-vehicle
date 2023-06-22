const vehicleModel=require("../models/vehicleModel")
const bookingModel=require("../models/bookingModel")

exports.addVehicle=async function(req,res){
    try{
        const vehicleData = [
            { type: 'car', name: 'Hatchback'},
            { type: 'car', name: 'SUV'},
            { type: 'car', name: 'Sedan'},
            { type: 'bike', name: 'Cruiser'}
        ];
        vehicleModel.insertMany(vehicleData);
        return res.status(200).send({status:true,message:"success"})
    }
    catch(err){
        return res.status(500).send({status:false, message:err.message})
    }
}