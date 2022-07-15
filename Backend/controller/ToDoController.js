import ToDoModel from '../models/ToDoModel.js';

export const getToDo = async (req, res) => {
  const ToDo = await ToDoModel.find();
  res.send(ToDo);
};

export const saveToDo = async (req, res) => {
  const { text } = req.body;

  ToDoModel.create({ text })
    .then(() => res.set(201).send('Added succesfully...'))
    .catch((err) => console.log(err));
};

export const deleteToDo = (req, res) => {
  const { _id } = req.params;
  ToDoModel.findByIdAndDelete(_id)
    .then(() => res.set(201).send('deleted succesfully...'))
    .catch((err) => console.log(err));
};

export const updateToDo = (req, res) => {
  const { _id, text } = req.body;
  ToDoModel.findByIdAndUpdate(_id, { text })
    .then(() => res.set(201).send('updated succesfully...'))
    .catch((err) => console.log(err));
};
