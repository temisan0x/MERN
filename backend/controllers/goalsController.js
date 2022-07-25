const getGoals = (req, res) => {
    res.status(200).json({ message: 'Get Goals!' });
};

const postGoals = (req, res) => {
    res.status(200).json({ message: 'Set Goals!' });
};

const updateGoal = (req, res) => {
    res.status(200).json({ message: `UpdateGoal! ${req.params.id}` });
}

const deleteGoal = (req, res) => {
    res.status(200).json({ message: `DeleteGoal! ${req.params.id}` });
}

module.exports = {
    getGoals,
    postGoals,
    updateGoal,
    deleteGoal
}