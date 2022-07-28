const asyncHandler = require('express-async-handler');
const Note = require('../models/notesModel');
//mongoose returns a promise, we will there require an asyncHandler  by default
//@desc getNotes
//@route GET POST /api/notes
//@access PRIVATE

const getNotes = asyncHandler(async(req, res) => {
    console.log(req.body);
    const notes = await Note.find();
    res.status(200).json(notes);
});

//@desc postNotes
//@route POST /api/notes
//@access PRIVATE

const setNotes = asyncHandler(async(req, res) => {
    if (!req.body.text ) {
        res.status(400)
        throw new Error('Please add a text field');
    }
    const note = await Note.create({
        text: req.body.text,
    })
    res.status(200).json(note);
});

//@desc updateNote
//@route  update /api/notes
//@access PRIVATE

const updateNote = asyncHandler(async (req, res) => {
    const goal = await Note.findById(req.params.id);
    if (!goal) { 
        res.status(400);
        throw new Error('Note not found');
    }
    const updatedNote = await Note.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })
    res.status(200).json(updatedNote);
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