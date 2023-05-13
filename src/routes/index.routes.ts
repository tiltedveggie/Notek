import { Router } from 'express';
import { getTasks } from '../controllers/tasks.controller';

const router = Router();

router.get('/', async (_req, res) => {
	const tasks = await getTasks();

	res.render('index', { tasks: tasks });
});

export default router;
