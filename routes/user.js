const express = require("express");
const router = express.Router();
const userModel = require("../model/userModel");

router.get("/", async (req, res) => {
  const users = await userModel.find();
  res.json(users);
});
router.get("/:id", async (req, res) => {
  try {
    const users = await userModel.findById(req.params.id);
    res.json(users);
  } catch (e) {
    console.log(e);
  }
});

router.post("/", async (req, res) => {
  const data = {
    name: req.body.name,
    age: req.body.age,
  };
  try {
    const user = new userModel(data);
    await user.save();
    res.json(user);
  } catch (e) {
    console.log(e);
  }
});
router.patch("/:id", async (req, res) => {
  const data = {
    name: req.body.name,
    age: req.body.age,
  };
  await userModel.findByIdAndUpdate({ _id: req.params.id }, data);
  const userUpdate = await userModel.findById(req.params.id);
  res.json(userUpdate);
});

router.delete('/:id', async (req, res) => {
    try{
        await userModel.findByIdAndDelete(req.params.id);
        res.json({
            message : "deleted",
        })
    }catch(e){
        console.log(e);
    }
});
module.exports = router;
