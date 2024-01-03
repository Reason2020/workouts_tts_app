const db = require('../db');
const { v4: uuid } = require('uuid');

//get all drills
const getAllDrills = async (req, res) => {
    try {
        const drills = await db.query('SELECT * FROM drills');
        res.status(200).json({
            success: true,
            data: drills.rows,
            message: "Successfully retrieved drills"
        });
    } catch (err) {
        console.log('Error when getting drills: ', err);
        res.status(500).json({
            success: false,
            message: "Server failed when getting all drills"
        });
    }
}

//get single drill by id
const getDrillById = async (req, res) => {
    try {
        const { id } = req.params;
        const drill = await db.query("SELECT * FROM drills WHERE drill_id=$1", [ id ]);
        if (!drill) {
            return res.status(404).json({
                success: false,
                message: "No such drill"
            })
        }
        res.status(200).json({
            success: true,
            data: drill.rows,
            message: "Successfully retrieved drill"
        })
    } catch (err) {
        console.log("Error when getting drill by id: ", err);
        res.status(500).json({
            success: false,
            message: "Server failed when getting drill"
        });
    }
}

//add new drill
const addNewDrill = async (req, res) => {
    try {
        const { title, description } = req.body;
        if (!title || !description) {
            return res.status(400).json({
                success: false,
                message: "All fields required"
            });
        }
        const newDrillId = uuid();
        await db.query("INSERT INTO drills (drill_id, drill_title, drill_description) VALUES ($1, $2, $3)", [ newDrillId, title, description ]);
        res.status(201).json({
            success: true,
            message: "Successfully added new drill"
        })
    } catch (err) {
        console.log("Error when adding new drill: ", err);
        res.status(500).json({
            success: false,
            message: "Server failed when adding new drill"
        });
    }
}

//update drill by id
const updateDrillById = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description } = req.body;
        if (!title || !description) {
            return res.status(400).json({
                success: false,
                message: "All fields not specified"
            });
        }
        await db.query("UPDATE drills SET drill_title=$1, drill_description=$2 WHERE drill_id=$3", [ title, description, id ]);
        res.status(200).json({
            success: true,
            message: "Successfully updated drill"
        });
    } catch (err) {
        console.log("Error while updating drill: ", err);
        res.status(500).json({
            success: false,
            message: "Server failed when updating drill"
        });
    }
}

//delete drill by id
const deleteDrillById = async (req, res) => {
    try {
        const { id } = req.params;
        await db.query("DELETE FROM drills WHERE drill_id=$1", [ id ]);
        res.status(200).json({
            success: true,
            message: "Successfully deleted drill"
        });
    } catch (err) {
        console.log("Error when deleting drill: ", err);
        res.status(500).json({
            success: false,
            message: "Server failed when deleting drill"
        })
    }
}

module.exports = {
    getAllDrills,
    getDrillById,
    addNewDrill,
    updateDrillById,
    deleteDrillById
}