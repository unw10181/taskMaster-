const { Schema, model } = require("mongoose");

const projectSchema = new Schema({
  name: { type: String, required: true },
  description: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

module.exports = model("Project", projectSchema);
