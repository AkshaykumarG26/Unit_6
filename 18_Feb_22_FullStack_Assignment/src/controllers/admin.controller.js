const express = require("express");

const Admin = require("../models/admin.model");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const admin = await Admin.create(req.body);
    res.status(200).send(admin);
  } catch (e) {
    return res.status(500).json({ status: "Failed", Message: e.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const admin = await Admin.find().lean().exec();
    return res.status(201).send(admin);
  } catch (e) {
    return res.status(500).json({ status: "Failed", Message: e.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const admin = await Admin.findById().lean().exec();
    res.send(201).send(admin);
  } catch (e) {
    return res.status(500).json({ status: "Failed", Message: e.message });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const admin = await Admin.findOneAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();
    return res.status(201).send(admin);
  } catch (e) {
    return res.status(500).json({ status: "Failed", Message: e.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const admin = await Admin.findByIdAndDelete(req.params.id)
      .lean()
      .exec();
    return res.status(200).send(admin);
  } catch (e) {
    return res.status(500).json({ status: "Failed", Message: e.message });
  }
});

module.exports = router;
