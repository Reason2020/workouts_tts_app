const express = require('express');
const {
    getAllDrills,
    getDrillById,
    addNewDrill,
    updateDrillById,
    deleteDrillById
} = require('../controllers/drills');

const drillsRoute = express.Router();

//get all drills
drillsRoute.get('/', getAllDrills);

//get drill by id
drillsRoute.get('/:id', getDrillById);

//add new drill
drillsRoute.post('/', addNewDrill);

//update drill by id
drillsRoute.put('/:id', updateDrillById);

//delete drill by id
drillsRoute.delete('/:id', deleteDrillById);

module.exports = drillsRoute;