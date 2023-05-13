import { Router } from 'express';

const router = Router();

router.post('/add', (req, res) => {
	console.log(req.body);
	res.json({ status: 'Saved', data: req.body });
});

router.post('/edit', (_req, res) => {
	res.json('Edited');
});

export default router;
