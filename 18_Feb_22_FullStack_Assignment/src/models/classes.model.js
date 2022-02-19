const {model, Schema} = require("mongoose")

const classSchema = new Schema({
    grade: {type: String, required: true},
    section: {type: String, required: true},
    subject: {type: String, required: true}
},{
    versionKey: false,
    timestamps: true
})

module.exports = model("class", classSchema)
