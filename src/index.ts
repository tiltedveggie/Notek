import app from './app';

app.listen(process.env?.['APP_PORT'] || 3300, () => {
	console.log('Connected to backend!');
});
