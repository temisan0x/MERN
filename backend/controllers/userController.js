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
    //if user already exists
    const userExist = await User.findOne({email });
    if (userExist) {
        res.status(404);
        throw new Error('User already exists')
    };
    //Hash of user password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //create user
    const user = await User.create({
        name,
        email,
        password: hashedPassword,
    });

    if (user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
        })
    }
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


module.exports = { registerUser, loginUser, getUser }