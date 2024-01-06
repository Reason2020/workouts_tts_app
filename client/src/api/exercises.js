import axios from "axios"

const BASE_API_URL = 'http://localhost:3005/api/v1/workouts';

export const getAllExercises = async () => {
    const response = await axios.get(`${BASE_API_URL}/exercises`);
    return response.data;
}

export const deleteExerciseById = async (id) => {
    const response = await axios.delete(`${BASE_API_URL}/exercises/${id}`);
    return response.data;
}

export const addNewExercise = async (title, description, duration) => {
    const response = await axios.post(
        `${BASE_API_URL}/exercises`,
        {
            title,
            description,
            duration
        }
    )
    return response.data;
}