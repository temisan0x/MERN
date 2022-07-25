const express = require('express');
const { listeners } = require('process');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;

const app = express();

app.get('/', (req, res) => {
    res.json({message: 'Success!'});
}) 

app.listen(port, () => console.log(`Server started on ${port}`));