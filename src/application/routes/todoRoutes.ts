import express from 'express';
import { TodoController } from '../controllers/todoController';
import { TodoService } from '../services/todoService';

import { TodoModel } from '../../infrastructure/persistence/todoModel';
import { TodoRepositoryImpl } from '../../infrastructure/persistence/todoRepositoryImpl';


const router = express.Router();
const todoRepository = new TodoRepositoryImpl(TodoModel); // Dependency Injection can be used here
const todoService = new TodoService(todoRepository);
const todoController = new TodoController(todoService);

router.get('/', todoController.getAllTodos);
router.post('/', todoController.createTodo);
router.get('/:id', todoController.getTodoById);
router.put('/:id', todoController.updateTodo);
router.delete('/:id', todoController.deleteTodo);

export default router;
