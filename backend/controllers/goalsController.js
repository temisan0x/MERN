const asyncHandler = require('express-async-handler');
//mongoose returns a promise, we will there require an asyncHandler  by default
//@desc getNotes
//@route GET POST /api/notes
//@access PRIVATE

const getNotes = asyncHandler(async(req, res) => {
    console.log(req.body);
    res.status(200).json({ message: 'Get Goals!' });
});

//@desc postNotes
//@route POST /api/notes
//@access PRIVATE

const setNotes = asyncHandler(async(req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field');
    }
    res.status(200).json({ message: 'Set Notes!' });
});

//@desc updateNote
//@route  update /api/notes
//@access PRIVATE

const updateNote = asyncHandler(async(req, res) => {
    res.status(200).json({ message: `UpdateNote! ${req.params.id}` });
})

//@desc deleteNote
//@route DELETE POST /api/notes
//@access PRIVATE

const deleteNote = asyncHandler(async(req, res) => {
    res.status(200).json({ message: `DeleteNote! ${req.params.id}` });
})

module.exports = {
    getNotes,
    setNotes,
    updateNote,
    deleteNote
}