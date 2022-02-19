const {Schema, model, mongoose} = require("mongoose")

const teacherSchema = new Schema({
    name: {type: String, required: true},
    gender: {type: String, required: true},
    age: {type: Number, required: true},
    class_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "classes",
        required: true
    }
}, {
    versionKey: false,
    timestamps: true
})

module.exports = model("teacher", teacherSchema)

