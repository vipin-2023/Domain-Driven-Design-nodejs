import mongoose, { Document, Schema } from 'mongoose';
import { Todo } from '../../domain/models/todo';

interface TodoDocument extends Todo, Document {}

const TodoSchema = new Schema<TodoDocument>({
  title: { type: String, required: true },
  description: { type: String, required: true },
});

export const TodoModel = mongoose.model<TodoDocument>('Todo', TodoSchema);
