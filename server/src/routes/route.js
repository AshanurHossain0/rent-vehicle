const express=require("express")
const router=express.Router()

router.post("/",)
router.post("/",)
router.get("/",)

router.all('/*',(req ,res)=>{
    res.status(400).send({status: false , message :" path invalid"})
})
  
module.exports=router