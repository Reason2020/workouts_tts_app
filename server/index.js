//imports
const express = require('express');
require('dotenv').config();
const morgan = require('morgan');
const exercisesRoute = require('./routes/exercises');

//other variables
const app = express();
const PORT = process.env.SERVERPORT || 3001;

//middlewares
app.use(express.json());
app.use(morgan('tiny'));

//routes
app.get('/test', (req, res) => {
    res.status(200).json({
        success: true,
        message: "Successful"
    });
});
app.use('/api/v1/exercises', exercisesRoute);
//app
app.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}`);
});

