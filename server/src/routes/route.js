const express=require("express")
const router=express.Router()
const {addVehicle} = require("../controllers/controller.js")

router.post("/vehicle",addVehicle)
router.post("/",)
router.get("/",)

router.all('/*',(req ,res)=>{
    res.status(400).send({status: false , message :" path invalid"})
})
  
module.exports=router