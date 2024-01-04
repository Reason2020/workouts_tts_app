//THIS IS FOR JUNCTION TABLE
const db = require('../db');
const { v4: uuid } = require('uuid');

//add new exercises_drills
const addExerciseToDrill = async (req, res) => {
    try {
        const { exerciseId, drillId } = req.body;
        if (!exerciseId || !drillId) {
            return res.status(400).json({
                success: false,
                message: "Did not provide either exerciseId or drillId"
            });
        }
        const newExercisesDrillsId = uuid();
        await db.query("INSERT INTO exercises_drills (exercises_drills_id, exercise_id, drill_id) VALUES ($1, $2, $3)", [ newExercisesDrillsId, exerciseId, drillId ]);
        res.status(200).json({
            success: true,
            message: "Successfully added exercise to drill"
        });
    } catch (err) {
        console.log("Error when adding exercise to drill");
        res.status(500).json({
            success: false,
            message: "Server failed when adding exercise to drill"
        });
    }
} 

//get all the exercises in a drill
const getAllExercisesInADrillById = async (req, res) => {
    try {
        const { drillId } = req.body;
        if (!drillId) {
            return res.status(400).json({
                success: false,
                message: "Drill Id not specified"
            });
        }
        const exercises = await db.query("SELECT ex.* FROM exercises ex JOIN exercises_drills ed ON ex.exercise_id=ed.exercise_id WHERE ed.drill_id=$1", [ drillId ]);
        if (!exercises) {
            return res.status(404).json({
                success: false,
                message: "No such drill"
            })
        }
        res.status(200).json({
            success: true,
            data: exercises.rows,
            message: "Successfully retrieved exercises in a drill"
        });
    } catch (err) {
        console.log('Error when retrieving the exercises in a drill: ', err);
        res.status(500).json({
            success: false,
            message: "Server failed to retrieve exercises in a drill"
        });
    }
}

//remove exercise from a drill
const removeExerciseFromDrill = async (req, res) => {
    try {
        const { id: drillId } = req.params;
        const { exerciseId } = req.body;
        if (!exerciseId) {
            return res.status(400).json({
                success: false,
                message: "Exercise Id not specified"
            });
        }
        await db.query("DELETE FROM exercises_drills WHERE exercise_id=$1 AND drill_id=$2", [ exerciseId, drillId ]);
        res.status(200).json({
            success: true,
            message: "Successfully removed exercise from a drill"
        });
    } catch (err) {
        console.log("Error when removing exercise from drill");
        res.status(500).json({
            success: false,
            message: "Server failed when removing exercise from drill"
        });
    }
}

//FIXME: Might need this later

//get all the drills that an exercise is tied to
// const getAllDrillsByExercise = async (req, res) => {
//     try {
//         const { exerciseId } = req.body;
//         if (!exerciseId) {
//             return res.status(400).json({
//                 success: false,
//                 message: 'Exercise Id not specified'
//             });
//         }
//         const drills = await db.query('SELECT d.* FROM drills JOIN exercises_drills ed ON ed.drill_id=d.drill_id WHERE ed.exercise_id=$1', [ exerciseId ]);
//         res.status(200).json({
//             success: true,
//             data: drills.rows,
//             message: "Successfully retrieved drills by exercise"
//         });
//     } catch (err) {
//         console.log("Error when getting all the drills that the exercise is in: ", err);
//         res.status(500).json({
//             success: false,
//             message: "Server failed when getting drills"
//         });
//     }
// }

module.exports = {
    addExerciseToDrill,
    getAllExercisesInADrillById,
    removeExerciseFromDrill
}