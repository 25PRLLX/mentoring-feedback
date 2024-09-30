import React, { useEffect, useState } from 'react';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import axios from 'axios';
import './style.css';


const App = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const mentoringId = 1;

  const getFeedbacks = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/feedbacks/');
      setFeedbacks(response.data);
    } catch (error) {
      console.error('Error fetching feedbacks:', error);
    }
  };

  useEffect(() => {
    getFeedbacks();
  }, []);

  return (
    <div className="container mx-auto p-4 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Mentoring Feedback</h1>
      <FeedbackForm mentoringId={mentoringId} setFeedbacks={setFeedbacks} />
      <FeedbackList feedbacks={feedbacks} />
    </div>
  );
};

export default App;
