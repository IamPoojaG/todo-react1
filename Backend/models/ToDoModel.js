import mongoose from 'mongoose';
const todoSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const ToDoModel = mongoose.model('ToDoModel', todoSchema);
export default ToDoModel;
