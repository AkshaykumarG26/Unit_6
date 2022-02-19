
const {model, Schema, mongoose} = require("mongoose")

const adminSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
      },
      {
    teacher_id: {
      type: mongoose.Schema.Types.objectId,
      ref: "teacher",
    //   required: true,
    },
    class_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "class",
    //   required: true,
    },
});

module.exports = model("admin", adminSchema);