import { Request, Response } from 'express';
import Task from '../models/Task';
import { ITask } from '../interfaces/tasks.interfaces';

export const getTasks = async () => {
	const tasks: ITask[] = await Task.find({}).lean();

	return tasks;
};

export const addTask = async (req: Request, res: Response) => {
	try {
		const task = new Task(req.body);
		await task.save();
	} catch (err) {
		console.log(err);
	}

	res.redirect('/');
};
