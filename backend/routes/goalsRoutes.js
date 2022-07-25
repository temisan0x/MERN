const express = require('express');
const router = express.Router();
const {getGoals} = require('../controllers/goalsController');

router.get('/', {getGoals});

router.post('/', (req, res) => {
    res.status(200).json({ message: 'Set Goals!' });
});

router.put('/:id', (req, res) => {
    res.status(200).json({ message: `UpdateGoal! ${req.params.id}`  });
});

router.delete('/:id', (req, res) => {
    res.status(200).json({ message: `DeleteGoal! ${req.params.id}` });
});

module.exports = router