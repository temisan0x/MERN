const express = require('express');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');
const colors = require('colors')
const port = process.env.PORT || 5000;
const connectDB = require('./config/db')


connectDB();
const app = express();

//middleware
app.use(express.json());    
app.use(express.urlencoded({ extended: false }));

app.use('/api/notes', require('./routes/notesRoutes'));

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on ${port}`));