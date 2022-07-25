const express = require('express');
const router = express.Router();
const {getGoals, postGoals,updateGoal,deleteGoal} = require('../controllers/goalsController');


router.route('/').get(getGoals).post(postGoals);
router.route('/:id').put(updateGoal).delete(deleteGoal);

module.exports = router