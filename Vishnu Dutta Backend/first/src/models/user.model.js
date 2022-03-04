const {model, mongoose, Schema} = require("mongoose")

const userSchema = new Schema({
    name: {type: String, required: true},
    age: {type: Number, required: true},
    school: {type: String, required: true}
},{
    versionKey: false,
    timestamps: true
})

module.exports = model("user", userSchema)