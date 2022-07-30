const express = require('express');
const router = express.Router();

const { registerUser } = require('../userController');

router.post('/register', registerUser);