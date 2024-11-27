const express= require('express')
const router= express.Router();
const Item= require('../models/Item')


router.post("/", async(req,res)=>{
    try{
        const newItem = new Item(req.body)
        const savedItem= await newItem.save();
        res.status(200).json(savedItem)
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
})

router.get("/", async(req,res)=>{
    try{
        const item = await Item.find();
        
        res.status(200).json(item)
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
})

router.put("/:id", async(req,res)=>{
    try{
        const updatedItem= await Item.findByIdAndUpdate(req.params.id,req.body,{new:true});

        res.status(200).json(updatedItem)
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
})

router.delete("/:id", async(req,res)=>{
    try{
        const updatedItem= await Item.findByIdAndUpdate(req.params.id);

        res.status(200).json(updatedItem)
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
})
module.exports = router;