const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

router.post("/products/add", async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).send({ product });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.get("/products/:userId",async(req,res)=>{
  try{
    const product=await Product.findOne({_id:req.params["userId"]})
    res.send(product);
  }catch(error){
    res.status(400).send(error.message)
  }
});
module.exports=router
