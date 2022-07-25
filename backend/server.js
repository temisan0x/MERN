const express = require('express');
const { listeners } = require('process');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/goals', require('./routes/goalsRoutes'));

app.listen(port, () => console.log(`Server started on ${port}`));