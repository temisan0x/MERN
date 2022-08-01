const express = require('express');
const router = express.Router();
const {getNotes, setNotes,updateNote,deleteNote} = require('../controllers/notesController');

const { protect } = require("../middleware/authMiddleware");

router.route('/').get(protect, getNotes).post(protect, setNotes);
router.route('/:id').put(protect, updateNote).delete(protect, deleteNote);

module.exports = router; 