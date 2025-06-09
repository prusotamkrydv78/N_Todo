import mongoose, { Schema } from "mongoose";

const todoSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true, // optional, but often good 💕
    },
  },
  { timestamps: true }
);

const TodoModel = mongoose.models.Todo || mongoose.model("Todo", todoSchema);
export default TodoModel;
