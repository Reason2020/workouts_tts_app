//imports
const express = require('express');
require('dotenv').config();
const morgan = require('morgan');
const cors = require('cors');
const exercisesRoute = require('./routes/exercises');
const drillsRoute = require('./routes/drills');
const exercisesDrillsRoute = require('./routes/exercises_drills');

//other variables
const app = express();
const PORT = process.env.SERVERPORT || 3001;

//middlewares
app.use(express.json());
app.use(morgan('tiny'));
app.use(cors({
    origin: 'http://localhost:5173'
}));

//routes
app.get('/test', (req, res) => {
    res.status(200).json({
        success: true,
        message: "Successful"
    });
});
app.use('/api/v1/workouts/exercises', exercisesRoute);
app.use('/api/v1/workouts/drills', drillsRoute);
app.use('/api/v1/workouts/exercises_drills', exercisesDrillsRoute);

//app
app.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}`);
});

