// @desc Register new user
//@route POST /api/users
//@access Public

const registerUser = (req, res) => {
    res.json({message: 'Registration successful.'});
}

// @desc Authenticate user
//@route POST /api/users/login
//@access Public

const loginUser = (req, res) => {
    res.json({message: 'Login user'});
}


// @desc Get user data
//@route POST /api/users/me
//@access Public

const getUser = (req, res) => {
    res.json({message: 'user data displayed'});
}


module.exports = {registerUser, loginUser, getUser}