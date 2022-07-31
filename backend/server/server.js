const express = require('express');
const dotenv = require('dotenv').config();
const { errorHandler } = require('../middleware/errorMiddleware');
const colors = require('colors')
const port = process.env.PORT || 5000; 
const connectDB = require('../config/db')


connectDB();

/**
 * @params initialize express server;
 */

const app = express();

/**
 * @params middleware;
 */

app.use(express.json());    
app.use(express.urlencoded({ extended: false }));

/**
 * @params user && notes routes;
 */

app.use(
    '/api/notes', require('../routes/noteRoutes')
);
app.use(
    '/api/users', require('../routes/userRoutes')
)

/**
 * @params end-point error handler
 */

app.use(errorHandler)

app.listen(port, console.log(`Server started at port ${port} `));

//@NB: understanding the anatomy of mongoose