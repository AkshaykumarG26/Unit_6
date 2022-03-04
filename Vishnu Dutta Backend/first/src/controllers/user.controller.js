const express = require("express")

const User = require("../models/user.model")

const router = express.Router()



// post

router.post('/', async (req, res) => {
    try{
        const user = await User.create(req.body)
        return res.status(200).send(user)

    }catch(e){
        return res.status(500).json({ status: "Failed", Message: e.message });
    }
})



// get

router.get("/", async (req, res) => {
    try{
        const user = await User.find().lean().exec()
        return res.status(201).send(user)

    }catch(e){
        return res.status(500).json({ status: "Failed", Message: e.message });
    }
})

// get using id
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById().lean().exec();
    return res.status(201).send(user);
  } catch (e) {
    return res.status(500).json({ status: "Failed", Message: e.message });
  }
});

// patch

router.patch("/:id", async (req, res) => {
    try{

        
    }catch(e){
        return res.status(500).json({ status: "Failed", Message: e.message });
    }
})

// delete
// put



module.exports = router