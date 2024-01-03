//imports
const express = require('express');
require('dotenv').config();
const exercisesRoute = require('./routes/exercises');

//other variables
const app = express();
const PORT = process.env.SERVERPORT || 3000;

//middlewares

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

