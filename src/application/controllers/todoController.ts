import { Request, Response } from 'express';
import { TodoService } from '../services/todoService';

export class TodoController {
  private todoService: TodoService;

  constructor(todoService: TodoService) {
    this.todoService = todoService;
  }

  getAllTodos = async (_req: Request, res: Response): Promise<void> => {
    try {
      const todos = await this.todoService.getAllTodos();
      res.json(todos);
    } catch (error) {
      res.status(500).json({ message: 'An error occurred while fetching todos' });
    }
  };

  createTodo = async (req: Request, res: Response): Promise<void> => {
    try {
      const { title, description } = req.body;
      const createdTodo = await this.todoService.createTodo(title, description);
      res.status(201).json(createdTodo);
    } catch (error) {
      res.status(500).json({ message: 'An error occurred while creating a todo' });
    }
  };

  getTodoById = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;
      const todo = await this.todoService.getTodoById(id);
      if (!todo) {
        res.status(404).json({ message: 'Todo not found' });
        return;
      }
      res.json(todo);
    } catch (error) {
      res.status(500).json({ message: 'An error occurred while fetching the todo' });
    }
  };

  updateTodo = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;
      const { title, description } = req.body;
      const updatedTodo = await this.todoService.updateTodo(id, title, description);
      if (!updatedTodo) {
        res.status(404).json({ message: 'Todo not found' });
        return;
      }
      res.json(updatedTodo);
    } catch (error) {
      res.status(500).json({ message: 'An error occurred while updating the todo' });
    }
  };

  deleteTodo = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;
      const deletedTodo = await this.todoService.deleteTodo(id);
      if (deletedTodo) {
        res.status(200).json({ message: 'Todo deleted successfully' });
      } else {
        res.status(404).json({ message: 'Todo not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'An error occurred while deleting the todo' });
    }
  };
}
