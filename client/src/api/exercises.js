import axios from "axios"

const BASE_API_URL = 'http://localhost:3005/api/v1/workouts';

export const getAllExercises = async () => {
    const response = await axios.get(`${BASE_API_URL}/exercises`);
    return response.data;
}