// src/api.js
import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const getBudget = async () => {
    return await axios.get(`${API_URL}/budget`);
};

export const getGoals = async () => {
    return await axios.get(`${API_URL}/goals`);
};

export const getTax = async () => {
    return await axios.get(`${API_URL}/tax`);
};