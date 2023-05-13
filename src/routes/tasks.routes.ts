import { Router } from 'express';
import { addTask } from '../controllers/tasks.controller';

const router = Router();

router.post('/add', addTask);

router.post('/edit', (_req, res) => {
	res.json('Edited');
});

export default router;
