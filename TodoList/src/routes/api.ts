import { Router } from "express";

import * as TodoController from "../controllers/todo.controller";

const router = Router();

router.get("/todo", TodoController.allTodos);
router.post("/todo", TodoController.createTodo);
//router.get("/todo/:id", TodoController.getTodo);
router.put("/todo/:id", TodoController.updateTodo);
router.delete("/todo/:id", TodoController.deleteTodo);


export default router;
