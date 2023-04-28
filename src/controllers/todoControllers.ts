import { Request, Response } from 'express';
import todoModel from '../models/todoModel';

const todoController = {
  getAll: (req: Request, res: Response) => {
    const todos = todoModel.getAll();
    res.render('todos', {
      todos,
    });
  },

  get: (req: Request, res: Response) => {
    const id = req.params.id;
    const todo = todoModel.get(id);
    res.render('todo', {
      todo,
    });
  },
};

export default todoController;
