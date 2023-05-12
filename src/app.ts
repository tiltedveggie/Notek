import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import { engine } from 'express-handlebars';
import cors from 'cors';
import path from 'path';
import indexRoutes from './routes/index.routes';

import db from './database';
db();

const app = express();

app.use(cors());
app.use(express.json());

// ---------------------------------------------------------

// Define where is the "views" folder. For multi-plataform purposes, I will use
// the environment variable "__dirname" that tells us the absolute path of the
// directory containing the currently executing file. Also I will use the "path"
// Node module, basically let us concatenate (using join() method) directories and,
// depending the OS, it will use the "/" or "\" symbol.
app.set('views', path.join(__dirname, 'views'));

// Configure templates reader
app.engine(
	'.hbs',
	engine({
		layoutsDir: path.join(app.get('views'), 'layouts'), // In "layouts" directory, inside "views" directory, there is a file with code in common for all pages
		partialsDir: path.join(app.get('views'), 'partials'), // There is a "partials" directory that contains small pieces of code for import in another .hbs files
		defaultLayout: 'main',
		extname: '.hbs'
	})
);

app.set('view engine', '.hbs');

// ---------------------------------------------------------

app.use(indexRoutes);

export default app;
