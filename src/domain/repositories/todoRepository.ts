import { Todo } from '../models/todo';

export interface TodoRepository {
  getAll(): Promise<Todo[]>;
  create(title: string, description: string): Promise<Todo>;
  getById(id: string): Promise<Todo | null>;
  update(id: string, title: string, description: string): Promise<Todo | null>;
  delete(id: string): Promise<boolean>;
}
