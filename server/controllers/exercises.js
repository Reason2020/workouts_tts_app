const { v4: uuid } = require('uuid')
const db = require('../db');
const exercisesRoute = require('../routes/exercises');

//get all workouts
const getAllExercises = async (req, res) => {
    try {
        const exercises = await db.query("SELECT * FROM exercises");
        res.status(200).json({
            success: true,
            data: exercises.rows,
            message: "Got all the exercises"
        });
    } catch (err) {
        console.log("Error during exercise retrieval: ", err);
        res.status(500).json({
            success: false,
            message: "Server failed to get all the exercises. Try again later"
        });
    }
}

//get specific exercise by exercise id
const getExerciseById = async (req, res) => {
    try {
        const { id } = req.params;
        const exercise = await db.query("SELECT * FROM exercises WHERE exercise_id=$1", [id]);
        if (!exercise) {
            return res.status(404).json({
                success: false,
                message: "No such exercise"
            });
        }    
        res.status(200).json({
            success: true,
            data: exercise.rows,
            message: "Successfully retrived exercise by id"
        });
    } catch (err) {
        console.log("ERror when getting exercise by id: ", err);
        res.status(500).json({
            success: false,
            message: "Server failed when getting exercise. Try again later"
        });
    }
}

//add new exercise
const addNewExercise = async (req, res) => {
    try {
        const { title, description, duration } = req.body;
        if (!title || !description || !duration) {
            return res.status(400).json({
                success: false,
                message: "All fields required"
            });
        }
        const newExerciseId = uuid();
        const newExercise = await db.query("INSERT INTO exercises (exercise_id, exercise_title, exercise_description, exercise_duration) VALUES ($1, $2, $3, $4)", [ newExerciseId, title, description, duration ]);
        res.status(201).json({
            success: true,
            message: "Successfully added new exercise"
        });
    } catch(err) {
        console.log("Error adding new exercise: ", err);
        res.status(500).json({
            success: false,
            message: "Server failed when adding new exercise. Try again later"
        });
    }
}

//update exercise
const updateExerciseById = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, duration } = req.body;
        const updatedExercise = await db.query("UPDATE exercises SET exercise_title=$1, exercise_description=$2, exercise_duration=$3 WHERE exercise_id=$4", [ title, description, duration, id ]);
        res.status(202).json({
            success: true,
            message: "Successfully updated exercise",
        });
    } catch (err) {
        console.log('Error when updating exercise');
        res.status(500).json({
            success: false,
            message: "Server failed when updating exercise"
        });
    }
}

//delete exercise
const deleteExerciseById = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedExercise = await db.query("DELETE FROM exercises WHERE exercise_id=$1", [ id ]);
        res.status(200).json({
            success: true,
            message: "Successfully Deleted Exercise"
        });
    } catch (err) {
        console.log("Error when deleting exercise: ", err);
        res.status(500).json({
            success: false,
            message: "Server failed when deleting exercise"
        });
    }
}

module.exports = {
    getAllExercises,
    getExerciseById,
    addNewExercise,
    updateExerciseById,
    deleteExerciseById
}