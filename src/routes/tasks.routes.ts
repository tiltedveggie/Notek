import { Router } from 'express';
import { addTask, editTask, deleteTask } from '../controllers/tasks.controller';
import Task from '../models/Task';

const router = Router();

router.post('/add', addTask);

router.get('/edit/:id', async (req, res) => {
	try {
		const task = await Task.findById(req.params.id).lean();

		return res.render('edit', { task });
	} catch (err) {
		console.log(err);
	}
});

router.post('/edit/:id', editTask);

router.get('/delete/:id', deleteTask);

export default router;
