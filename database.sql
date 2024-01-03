//create database
CREATE DATABASE workouts;

//create table exercises
CREATE TABLE exercises (
    exercise_id uuid NOT NULL PRIMARY KEY,
    exercise_title VARCHAR(80) NOT NULL,
    exercise_description VARCHAR(80) NOT NULL,
    exercise_duration interval NOT NULL
);

//insert data in exercises table
INSERT INTO exercises 
(exercise_id, exercise_title, exercise_description, exercise_duration) 
VALUES 
('3f333df6-90a4-4fda-8dd3-9485d27cee36', 'Lateral Plank - Right', 'Lateral Plank is an exercise drill used to develop your lateral part of core', '30');

//get all data from exercises table
SELECT * FROM exercises;

//get exercise by exercise_id
SELECT * FROM exercises WHERE exercise_id = '3f333df6-90a4-4fda-8dd3-9485d27cee36';