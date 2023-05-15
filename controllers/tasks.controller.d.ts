import { Request, Response } from 'express';
import { ITask } from '../interfaces/tasks.interfaces';
export declare const getTasks: () => Promise<ITask[]>;
export declare const addTask: (req: Request, res: Response) => Promise<void>;
export declare const renderEditTask: (req: Request, res: Response) => Promise<void>;
export declare const editTask: (req: Request, res: Response) => Promise<void>;
export declare const deleteTask: (req: Request, res: Response) => Promise<void>;
export declare const toggleDoneTask: (req: Request, res: Response) => Promise<void>;
