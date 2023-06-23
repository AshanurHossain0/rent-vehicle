const vehicleModel=require("../models/vehicleModel")
const bookingModel=require("../models/bookingModel")
const mongoose =require("mongoose")
const ObjectId = mongoose.Types.ObjectId;


// add vehicle in the database
exports.addVehicle=async function(req,res){
    try{
        const vehicleData = [
            { type: 'car', wheels:4, name: 'Hatchback'},
            { type: 'car', wheels:4, name: 'SUV'},
            { type: 'car', wheels:4, name: 'Sedan'},
            { type: 'bike', wheels:2, name: 'Cruiser'},
            { type: 'bi-cycle', wheels:2, name: 'Avon'}
        ];
        await vehicleModel.insertMany(vehicleData);
        return res.status(201).send({status:true,message:"success"})
    }
    catch(err){
        return res.status(500).send({status:false, message:err.message})
    }
}

// add booking data in the database
exports.bookVehicle=async function(req,res){
    try{
        const nameRegex = /^[a-z ,.'-]+$/i
        const {fName,lName}=req.body;

        let vehicleId=req.params.vehicleId;
        if(!ObjectId.isValid(vehicleId)){
            return res.status(400).send({status:false, message:"Invalid vehicleId"});
        }
        
        if (!fName) return res.status(400).send({ status: false, message: "first name is mandatory" })
        if (!lName) return res.status(400).send({ status: false, message: "last name is mandatory" })

        if (! nameRegex.test(fName.trim())) return res.status(400).send({ status: false, message: "invalid first name" })
        if (! nameRegex.test(lName.trim())) return res.status(400).send({ status: false, message: "invalid last name" })

        const {startDate,endDate}=req.body;
        if(!startDate || !endDate) return res.status(400).send({status:false, message:"start and end date is mandatory"});

        const vehicleInfo=await vehicleModel.findOneAndUpdate({_id:vehicleId,isBooked:false},{isBooked:true});
        if(!vehicleInfo) return res.status(404).send({status:false,message:"the vehicle is unavailable"})

        const bookedVehicleData=await bookingModel.create({fName,lName,vehicleId,startDate,endDate})
        return res.status(201).send({status:true,message:"booking successful",data:bookedVehicleData})
    }
    catch(err){
        return res.status(500).send({status:false, message:err.message})
    }
}

// get available vehicle based on user preference
exports.getVehicle=async function(req,res){
    try{
        const {wheels,type}=req.query;
        if(!wheels && !type) return res.status(400).send({status:false,message:"please provide type of vehicle or number of wheels"})

        const queryObj={isBooked:false};
        if(wheels) queryObj.wheels=wheels;
        if(type) queryObj.type=type;

        const vehicles=await vehicleModel.find(queryObj);
        
        return res.status(200).send({status:true,message:"success",data:vehicles})

    }
    catch(err){
        return res.status(500).send({status:false, message:err.message})
    }
}