import { createTodo, getTodos, getTodoById, deleteTodo } from "../Controller/todoController.js";
import express from "express";


const router = express.Router();


router.post("/", createTodo);
router.get('/', getTodos);
router.get('/:id', getTodoById);
router.delete('/:id', deleteTodo);

export default router;