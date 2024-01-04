const express = require('express');
const exercisesDrillsRoute = express.Router();
const {
    addExerciseToDrill,
    getAllExercisesInADrillById,
    removeExerciseFromDrill,
} = require('../controllers/exercises_drills');

//add exercise to drill
exercisesDrillsRoute.post('/', addExerciseToDrill);

//get all exercises in a drill
exercisesDrillsRoute.get('/', getAllExercisesInADrillById);

//remove exercise from a drill
exercisesDrillsRoute.delete('/:id', removeExerciseFromDrill);

module.exports = exercisesDrillsRoute;