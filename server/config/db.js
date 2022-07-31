const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`Connected to mongoDB ${conn.connection.host}`.bgMagenta.underline);
    } catch (error) {
        console.log(error);
        process.exit(1);//exist process with failure
    }
}

module.exports = connectDB