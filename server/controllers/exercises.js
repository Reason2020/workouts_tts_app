const db = require('../db');

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

module.exports = {
    getAllExercises
}