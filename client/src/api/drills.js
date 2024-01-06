import axios from "axios";

const BASE_API_URL = 'http://localhost:3005/api/v1/workouts';

export const getAllDrills = async () => {
    const response = await axios.get(`${BASE_API_URL}/drills`);
    return response.data;
}

export const getDrillById = async (id) => {
    const response = await axios.get(`${BASE_API_URL}/drills/${id}`);
    return response.data;
}

export const addNewDrill = async (title, description) => {
    const response = await axios.post(
        `${BASE_API_URL}/drills`,
        {
            title,
            description
        }
    )
    return response.data;
}

export const updateDrillById = async (id, title, description) => {
    const response = await axios.put(
        `${BASE_API_URL}/drills/${id}`,
        {
            title,
            description
        }
    );
    return response.data;
}

export const deleteDrillById = async (id) => {
    const response = await axios.delete(`${BASE_API_URL}/drills/${id}`);
    return response.data;
}