import { Schema, model } from 'mongoose';
import { ITask } from '../interfaces/tasks.interfaces';

const taskSchema = new Schema<ITask>(
	{
		title: { type: String, required: true, unique: true, trim: true },
		description: { type: String, required: true },
		done: { type: Boolean, default: false }
	},
	{
		timestamps: true,
		versionKey: false
	}
);

export default model<ITask>('Task', taskSchema);
