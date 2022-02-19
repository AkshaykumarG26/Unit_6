const express = require("express")

const Teacher = require('../models/teacher.model')


const router = express.Router()

router.post('/', async(req, res) => {
    try{
        const teacher = await Teacher.create(req.body)
        res.status(200).send(teacher)
    }catch(e){
        return res.status(500).json({ status: "Failed", Message: e.message });
    }
})

router.get("/", async(req, res) => {
    try{
        const teachers = await Teacher.find().lean().exec()
        return res.status(201).send(teachers)
    }catch(e){
        return res.status(500).json({ status: "Failed", Message: e.message });
    }
})

router.get('/:id', async( req, res ) => {
    try{
        const teacher = await Teacher.findById().lean().exec()
        res.send(201).send(teacher)
    }catch(e){
        return res.status(500).json({ status: "Failed", Message: e.message });
    }
} )

router.patch('/:id', async( req, res ) => {
    try{
        const teacher = await Teacher.findOneAndUpdate(req.params.id, req.body, {new: true}).lean().exec();
        return res.status(201).send(teacher)
    }catch(e){
        return res.status(500).json({ status: "Failed", Message: e.message });
    }
})


router.delete('/:id', async (req, res) => {
    try{
        const teacher = await Teacher.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(200).send(teacher)
    }catch(e){
        return res.status(500).json({ status: "Failed", Message: e.message });
    }
})



module.exports = router