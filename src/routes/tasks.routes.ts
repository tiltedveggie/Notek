import { Router } from 'express';
import {
	addTask,
	renderEditTask,
	editTask,
	deleteTask,
	toggleDoneTask
} from '../controllers/tasks.controller';

const router = Router();

router.post('/add', addTask);

router.get('/edit/:id', renderEditTask);

router.post('/edit/:id', editTask);

router.get('/toggleDone/:id', toggleDoneTask);

router.get('/delete/:id', deleteTask);

export default router;
