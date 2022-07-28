const express = require('express');
const router = express.Router();
const {getNotes, postNotes,updateNote,deleteNote} = require('../controllers/notesController');


router.route('/').get(getNotes).post(postNotes);
router.route('/:id').put(updateNote).delete(deleteNote);

module.exports = router