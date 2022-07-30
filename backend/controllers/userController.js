const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

// @desc Register new user
//@route POST /api/users
//@access Public

const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        res.status(400)
        throw new Error('Please provide all fields');
    }
    res.json({ message: 'Registration user.' });
});

// @desc Authenticate user
//@route POST /api/users/login
//@access Public

const loginUser = asyncHandler(async (req, res) => {
    res.json({ message: 'Login user' });
});


// @desc Get user data
//@route POST /api/users/me
//@access Public

const getUser = asyncHandler(async (req, res) => {
    res.json({ message: 'user data displayed' });
});


module.exports = {registerUser, loginUser, getUser}