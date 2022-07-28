const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`Connected to mongoose ${conn.connection.host}`, cyan.underline);
    } catch (error) {
        console.log(error);
    }
}