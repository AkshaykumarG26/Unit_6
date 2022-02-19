const express = require("express");

const Classes = require("../models/classes.model");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const classes = await Classes.create(req.body);
    res.status(200).send(classes);
  } catch (e) {
    return res.status(500).json({ status: "Failed", Message: e.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const classes = await Classes.find().lean().exec();
    return res.status(201).send(classes);
  } catch (e) {
    return res.status(500).json({ status: "Failed", Message: e.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const classes = await Classes.findById().lean().exec();
    res.send(201).send(classes);
  } catch (e) {
    return res.status(500).json({ status: "Failed", Message: e.message });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const classes = await Classes.findOneAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();
    return res.status(201).send(classes);
  } catch (e) {
    return res.status(500).json({ status: "Failed", Message: e.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const classes = await Classes.findByIdAndDelete(req.params.id)
      .lean()
      .exec();
    return res.status(200).send(classes);
  } catch (e) {
    return res.status(500).json({ status: "Failed", Message: e.message });
  }
});

module.exports = router;
