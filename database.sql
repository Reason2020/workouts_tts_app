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

//update exercise by exercise_id
UPDATE TABLE exercises SET exercise_title='Update Test', exercise_description='Update Test Description', exercise_duration='30' WHERE exercise='3f333df6-90a4-4fda-8dd3-9485d27cee36'

//delete exercise by exercise_id
DELETE FROM exercises WHERE exercise_id='3f333df6-90a4-4fda-8dd3-9485d27cee36';

//create table drills
CREATE TABLE drills (
    drill_id uuid NOT NULL PRIMARY KEY,
    drill_title VARCHAR(80) NOT NULL,
    drill_description VARCHAR(80) NOT NULL
);

//change data type for drills
ALTER TABLE drills
ALTER COLUMN drill_description SET DATA TYPE VARCHAR(180);

//add new drill
INSERT INTO drills (drill_id, drill_title, drill_description) VALUES ('9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d', 'Core Drills', 'Core Drills is a collection of exercises that is focused on building your core strength');

//get all drills
SELECT * FROM drills;

//get drill by id
SELECT * FROM drill WHERE drill_id='9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d';

//update drill
UPDATE drills SET drill_title='Back Drills', drill_description='Back Drills is a collection of exercises that is focues on building your back muscles';

//delete drill
DELETE FROM drills WHERE drill_id='9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d';

//create table exercises_drills junction table
CREATE TABLE exercises_drills (
    exercise_id uuid,
    drill_id uuid,
    FOREIGN KEY (exercise_id) REFERENCES exercises(exercise_id),
    FOREIGN KEY (drill_id) REFERENCES drills(drill_id)
);

//add new junction data
INSERT INTO exercises_drills (exercise_id, drill_id) VALUES ('40e6215d-b5c6-4896-987c-f30f3678f608', '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d');

//get all the exercises that are tied up with at least one drill
SELECT * FROM exercises_drills;

//get all the exercises in a drill
SELECT ex.* FROM exercises ex JOIN exercises_drills ed ON ex.exercise_id=ed.exercise_id WHERE ed.drill_id='9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d';

//add a column in junction table
ALTER TABLE exercises_drills ADD COLUMN exercises_drills_id uuid PRIMARY KEY;

//change one exercise to another in a drill
UPDATE exercises_drills SET exercise_id=''