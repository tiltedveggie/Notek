import { Router } from 'express';

const router = Router();

router.get('/', (_req, res) => {
	res.render('index');
});

router.get('/about', (_req, res) => {
	res.render('about');
});

router.get('/edit', (_req, res) => {
	res.render('edit');
});

export default router;
