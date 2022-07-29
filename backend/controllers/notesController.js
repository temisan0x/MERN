const asyncHandler = require('express-async-handler');
const Note = require('../models/notesModel');
//mongoose returns a promise, we will there require an asyncHandler  by default
//@desc getNotes
//@route GET POST /api/notes
//@access PRIVATE

const getNotes = asyncHandler(async (req, res) => {
    console.log(req.body);
    const notes = await Note.find();
    res.status(200).json(notes);
});

//@desc postNotes
//@route POST /api/notes/
//@access PRIVATE

const setNotes = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        //client error handler
        throw new Error('Please add a text field');
    }
    //Submitted a payload of data
    const note = await Note.create({
        text: req.body.text
    })
    res.status(200).json(note);
});

//@desc updateNote
//@route  update /api/notes/:id
//@access PRIVATE

const updateNote = asyncHandler(async (req, res) => {
    const note = await Note.findById(req.params.id);
    if (!note) {
        res.status(400);
        throw new Error('Note not found');
    }
    //Submitted a payload of data && an id
    const updatedNote = await Note.findByIdAndUpdate(req.params.id,
        req.body, {
        new: true,
    })
    res.status(200).json(updatedNote);
})

//@desc deleteNote 
//@route DELETE POST /api/notes/:id
//@access PRIVATE

const deleteNote = asyncHandler(async (req, res) => {
    const note = await Note.findById(req.params.id);
    if (!note) {
        res.status(400);
        throw new Error('Note not found');
    }

    await note.remove()

    res.status(200).json({ message: `Note ${req.params.id} successfully deleted` });
})

module.exports = {
    getNotes,
    setNotes,
    updateNote,
    deleteNote
} 