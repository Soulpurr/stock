const express = require("express");
const Data = require("../models/Data");
const router = express.Router();

router.post("/createData", async (req, res) => {
  try {
    const { name, last, buy, sell, volume,base_unit } = req.body;
    
    let addData = await Data.create({
        name, last, buy, sell, volume,base_unit
    });
    res.send(addData);
  } catch (error) {
    res.send("Error");
  }
});

router.get("/fetchData", async (req, res) => {
  let data = await Data.find();
  res.send(data);
});



module.exports = router;