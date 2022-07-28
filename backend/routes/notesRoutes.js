const express = require('express');
const router = express.Router();
const {getNotes, setNotes,updateNote,deleteNote} = require('../controllers/notesController');


router.route('/').get(getNotes).post(setNotes);
router.route('/:id').put(updateNote).delete(deleteNote);

module.exports = router