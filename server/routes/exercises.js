const express = require('express');
const {
    getAllExercises
} = require('../controllers/exercises');

const exercisesRoute = express.Router();

exercisesRoute.get('/', getAllExercises);

module.exports = exercisesRoute;