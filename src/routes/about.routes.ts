import { Router } from 'express';

const router = Router();

router.get('/', (_req, res) => {
	res.render('about');
});

export default router;
