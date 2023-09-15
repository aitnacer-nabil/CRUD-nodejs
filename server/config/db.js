const mongoose =require('mongoose')
mongoose.set('strictQuery',false);

const connectDB= async()=>{
	try {
		const conn = await mongoose.connect(process.env.Mongo_db_Url);
		console.log(`Database connection: ${conn.connection.host}`)
	} catch (error) {
		console.log(error)
	}
}

module.exports = connectDB;