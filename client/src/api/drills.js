import axios from "axios";

const BASE_API_URL = 'http://localhost:3005/api/v1/workouts';

export const getAllDrills = async () => {
    const response = await axios.get(`${BASE_API_URL}/drills`);
    return response.data;
}

export const deleteDrillById = async (id) => {
    const response = await axios.delete(`${BASE_API_URL}/drills/${id}`);
    return response.data;
}