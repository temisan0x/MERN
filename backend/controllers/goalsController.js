const asyncHandler = require('express-async-handler');
//mongoose returns a promise, we will there require an asyncHandler  by default
//@desc getGoals
//@route GET POST /api/goals
//@access PRIVATE

const getNotes = asyncHandler(async(req, res) => {
    console.log(req.body);
    res.status(200).json({ message: 'Get Goals!' });
});

//@desc postGoals
//@route POST /api/goals
//@access PRIVATE

const setNotes = asyncHandler(async(req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field');
    }
    res.status(200).json({ message: 'Set Notes!' });
});

//@desc updateGoals
//@route  update /api/goals
//@access PRIVATE

const updateNotes = asyncHandler(async(req, res) => {
    res.status(200).json({ message: `UpdateGoal! ${req.params.id}` });
})

//@desc deleteGoals
//@route DELETE POST /api/goals
//@access PRIVATE

const deleteNotes = asyncHandler(async(req, res) => {
    res.status(200).json({ message: `DeleteGoal! ${req.params.id}` });
})

module.exports = {
    getNotes,
    setNotes,
    updateNotes,
    deleteNotes
}