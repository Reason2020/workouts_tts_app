const express = require('express');
const {
    getAllExercises,
    getExerciseById,
    addNewExercise,
    updateExerciseById,
    deleteExerciseById
} = require('../controllers/exercises');

const exercisesRoute = express.Router();

exercisesRoute.get('/', getAllExercises);
exercisesRoute.get('/:id', getExerciseById);
exercisesRoute.post('/', addNewExercise);
exercisesRoute.put('/:id', updateExerciseById);
exercisesRoute.delete('/:id', deleteExerciseById);

module.exports = exercisesRoute;