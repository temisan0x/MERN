//@desc getGoals
//@route GET POST /api/goals
//@access PRIVATE

const getGoals = (req, res) => {
    console.log(req.body);
    res.status(200).json({ message: 'Get Goals!' });
};

//@desc postGoals
//@route POST /api/goals
//@access PRIVATE

const postGoals = (req, res) => {
    if (!req.body.text) {
        res.status(400).json({ message: 'please provide a text!'  });
    }
    res.status(200).json({ message: 'Set Goals!' });
};

//@desc updateGoals
//@route  update /api/goals
//@access PRIVATE

const updateGoal = (req, res) => {
    res.status(200).json({ message: `UpdateGoal! ${req.params.id}` });
}

//@desc deleteGoals
//@route DELETE POST /api/goals
//@access PRIVATE

const deleteGoal = (req, res) => {
    res.status(200).json({ message: `DeleteGoal! ${req.params.id}` });
}

module.exports = {
    getGoals,
    postGoals,
    updateGoal,
    deleteGoal
}