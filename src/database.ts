import mongoose from 'mongoose';

const db = async () => {
	try {
		await mongoose.connect(process.env?.['DB_URL'] || '');
	} catch (err) {
		console.log(err);
	}
};

export default db;
