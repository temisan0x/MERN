//authMiddleware function runs during a res and req circle to check the token
const jwt = require('jsonwebtoken');
const asyncHandler = require("express-async-handler");
const User = require('../models/userModel');

const protect = asyncHandler(async (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            //get token from Bearer header
            token = req.headers.authorization.split(" ")[1]; //1 returns the token
            //verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            //Get user from the token ~ user id as payload
            req.user = await User.findById(decoded.id).select('-password');
            next()
        } catch (error) {
            console.log(error);
            res.status(401)
            throw new Error('Not authorized');
        }
    }

    if (!token) {
        res.status(401);
        throw new Error('Not authorized, No token');
    }
});

module.exports = {protect};