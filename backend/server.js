const express = require('express');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');
const colors = require('colors')
const port = process.env.PORT || 5000; 
const connectDB = require('./config/db')


connectDB();

//initialize express server
const app = express();
//middleware
app.use(express.json());    
app.use(express.urlencoded({ extended: false }));
//routes
app.use(
    '/api/notes', require('./routes/noteRoutes')
);
app.use(
    '/api/users', require('./routes/userRoutes')
)
//end-point error handler
app.use(errorHandler)

app.listen(port, console.log(`Server started at port ${port} `));
//understanding the anatomy of mongoose