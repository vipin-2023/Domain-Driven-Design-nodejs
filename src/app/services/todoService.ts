import { Todo } from '../../domain/models/todo';
import { TodoRepository } from '../../domain/repositories/todoRepository';

export class TodoService {
  private todoRepository: TodoRepository;

  constructor(todoRepository: TodoRepository) {
    this.todoRepository = todoRepository;
  }

  getAllTodos = async (): Promise<Todo[]> => {
    const todos = await this.todoRepository.getAll();
    return todos;
  };

  createTodo = async (title: string, description: string): Promise<Todo> => {
    const todo = await this.todoRepository.create(title, description);
    return todo;
  };

  getTodoById = async (id: string): Promise<Todo | null> => {
    const todo = await this.todoRepository.getById(id);
    return todo;
  };

  updateTodo = async (id: string, title: string, description: string): Promise<Todo | null> => {
    const updatedTodo = await this.todoRepository.update(id, title, description);
    return updatedTodo;
  };

  deleteTodo = async (id: string): Promise<boolean> => {
    const deletedTodo = await this.todoRepository.delete(id);
    return deletedTodo;
  };
}
