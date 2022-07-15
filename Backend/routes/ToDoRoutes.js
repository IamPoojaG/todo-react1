import express from 'express';

const router = express.Router();

import {
  getToDo,
  saveToDo,
  deleteToDo,
  updateToDo,
} from '../controller/ToDoController.js';

router.get('/get', getToDo);
router.post('/create', saveToDo);
router.delete('/delete', deleteToDo);
router.post('/update', updateToDo);

export default router;
