import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api/',
});

export const fetchFeedbacks = () => api.get('/feedbacks/');
export const submitFeedback = (data) => api.post('/feedback/', data);
export const fetchMentorings = () => api.get('/mentoring/');