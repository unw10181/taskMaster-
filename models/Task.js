const { Schema, model } = require("mongoose");

const taskSchema = new Schema({
  title: { type: String, required: true },
  description: String,
  status: {
    type: String,
    enum: ["To Do", "In Progress", "Done"],
    default: "To Do",
  },
  project: {
    type: Schema.Types.ObjectId,
    ref: "Project",
    required: true,
  },
});

module.exports = model("Task", taskSchema);
