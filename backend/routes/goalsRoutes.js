const express = require('express');
const router = express.Router();
const {getGoals, postGoals,updateGoal,deleteGoal} = require('../controllers/goalsController');

router.get('/', getGoals);

router.post('/', postGoals);

router.put('/:id',updateGoal);

router.delete('/:id', deleteGoal);

module.exports = router