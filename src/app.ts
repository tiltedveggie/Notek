import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import { engine } from 'express-handlebars';
import cors from 'cors';
import path from 'path';

import indexRoutes from './routes/index.routes';
import tasksRoutes from './routes/tasks.routes';
import aboutRoutes from './routes/about.routes';

import db from './database';
db();

import morgan from 'morgan';

// ---------------------------------------------------------

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

// ---------------------------------------------------------

app.set('views', path.join(__dirname, 'views'));

app.engine(
	'.hbs',
	engine({
		layoutsDir: path.join(app.get('views'), 'layouts'),
		partialsDir: path.join(app.get('views'), 'partials'),
		defaultLayout: 'main',
		extname: '.hbs'
	})
);

app.set('view engine', '.hbs');

// ---------------------------------------------------------

app.use('/', indexRoutes);
app.use('/tasks', tasksRoutes);
app.use('/about', aboutRoutes);

// ---------------------------------------------------------

export default app;
