import { Todo } from '../../domain/models/todo';
import { TodoRepository } from '../../domain/repositories/todoRepository';
import { Model } from 'mongoose';

export class TodoRepositoryImpl implements TodoRepository {
  private todoModel: Model<Todo>;

  constructor(todoModel: Model<Todo>) {
    this.todoModel = todoModel;
  }

  getAll = async (): Promise<Todo[]> => {
    const todos = await this.todoModel.find().exec();
    return todos;
  };

  create = async (title: string, description: string): Promise<Todo> => {
    const newTodo = new this.todoModel({ title, description });
    const createdTodo = await newTodo.save();
    return createdTodo.toObject();
  };

  getById = async (id: string): Promise<Todo | null> => {
    const todo = await this.todoModel.findById(id).exec();
    return todo ? todo.toObject() : null;
  };

  update = async (id: string, title: string, description: string): Promise<Todo | null> => {
    const updatedTodo = await this.todoModel.findByIdAndUpdate(
      id,
      { title, description },
      { new: true }
    ).exec();
    return updatedTodo ? updatedTodo.toObject() : null;
  };

  delete = async (id: string): Promise<boolean> => {
    const deletedTodo = await this.todoModel.findByIdAndDelete(id).exec();
    return !!deletedTodo;
  };
}
