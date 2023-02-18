import { Todo } from "../models/Todo";
import { Request, Response } from "express";

export const allTodos = async (req: Request, res: Response) => {
  const todos = await Todo.findAll();
  res.json(todos);
};

export const createTodo = async (req: Request, res: Response) => {
  if (req.body.title) {
    const newTodo = await Todo.create({
      title: req.body.title,
      done: req.body.done ? true : false,
    });
    res.status(201).json({ item: newTodo });
  } else {
    res.status(400).json({ message: "Title is required" });
  }
};

export const updateTodo = async (req: Request, res: Response) => {
  const id: string = req.params.id;
  let todo = await Todo.findByPk(id);
    if (todo) {
       if (req.body.title) {
            todo.title = req.body.title;
       }
         if (req.body.done) {
            switch (req.body.done.toLowerCase()){
                case 'true':
                case '1':
                    todo.done = true;
                    break;
                case 'false':
                case '0':
                    todo.done = false;
                    break;
            }
         }
        await todo.save();
        res.status(200).json({ item: todo });
    } else {
        res.status(404).json({ message: "Todo not found" });
    }
};

export const deleteTodo = async (req: Request, res: Response) => {
    const id: string = req.params.id;
    let todo = await Todo.findByPk(id);
    if (todo) {
        await todo.destroy();
        res.status(204).json({ message: "Todo deleted" });
    } else {
        res.status(404).json({ message: "Todo not found" });
    }
};
