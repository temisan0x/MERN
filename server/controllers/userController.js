const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs'); //encrypt & hash user password
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

//Generate a JWT
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })
}


// @desc Register new user
//@route POST /api/users
//@access Public

const registerUser = asyncHandler(async (req, res) => {
    // res.json({ message: 'registerUser'})
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        res.status(400)
        throw new Error('Please provide all fields');
    }
    //check if user already exists
    const userExist = await User.findOne({ email });
    if (userExist) {
        res.status(404);
        throw new Error('User already exists');
    };
    //generate salt to Hash user password
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
            token: generateToken(user._id)
        })
    } else {
        res.status(500)
        throw new Error('User not found')
    }
});

// @desc Authenticate user
//@route POST /api/users/login
//@access Public

const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    //check for user existance
    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    } else {
        res.status(500);
        throw new Error('invalid credentials')
    }
});


// @desc Get user data
//@route POST /api/users/me
//@access Private

const getUser = asyncHandler(async (req, res) => {
    res.json({ message: 'user data displayed' });
});


module.exports = { registerUser, loginUser, getUser }