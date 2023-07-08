import express from 'express';
import { TodoController } from '../controllers/todoController';
import { TodoService } from '../services/todoService';
import { TodoRepository } from '../../domain/repositories/todoRepository';
import { TodoModel } from '../../infrastructure/persistence/todoModel';

const router = express.Router();
const todoRepository = new TodoRepository(TodoModel); // Dependency Injection can be used here
const todoService = new TodoService(todoRepository);
const todoController = new TodoController(todoService);

router.get('/', todoController.getAllTodos);
router.post('/', todoController.createTodo);
router.get('/:id', todoController.getTodoById);
router.put('/:id', todoController.updateTodo);
router.delete('/:id', todoController.deleteTodo);

export default router;
