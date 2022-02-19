const {Schema, model, mongoose} = require("mongoose")

const teacherSchema = new Schema({
    name: {type: String, required: true},
    gender: {type: String, required: true},
    age: {type: Number, required: true},
    img_url: {type: String, required: false},
    class_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "class",
        required: true
    }
}, {
    versionKey: false,
    timestamps: true
})

module.exports = model("teacher", teacherSchema)