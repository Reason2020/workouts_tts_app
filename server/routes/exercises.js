const express = require('express');
const {
    getAllExercises,
    getExerciseById,
    addNewExercise,
    updateExerciseById,
    deleteExerciseById
} = require('../controllers/exercises');

const exercisesRoute = express.Router();

//get all exercises
exercisesRoute.get('/', getAllExercises);

//get exercise by id
exercisesRoute.get('/:id', getExerciseById);

//add new exercises
exercisesRoute.post('/', addNewExercise);

//update exercise by id
exercisesRoute.put('/:id', updateExerciseById);

//delete exercise by id
exercisesRoute.delete('/:id', deleteExerciseById);

module.exports = exercisesRoute;