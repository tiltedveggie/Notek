import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (_req, res) => {
	res.send('Hello xd');
});

app.listen(process.env?.['PORT'], () => {
	console.log('Connected to backend!');
});
