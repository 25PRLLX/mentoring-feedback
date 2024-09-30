import React, { useState } from 'react';
import axios from 'axios';

const FeedbackForm = ({ mentoringId, setFeedbacks }) => {
  const [rating, setRating] = useState(0);
  const [description, setDescription] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8000/api/feedbacks/', {
        mentoring: mentoringId,
        rating,
        description,
        name,
      });
      setMessage('Feedback enviado com sucesso!');
      setRating(0);
      setDescription('');
      setName('');
      const response = await axios.get('http://localhost:8000/api/feedbacks/');
      setFeedbacks(response.data);
    } catch (error) {
      setMessage('Erro ao enviar feedback.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-6">
      <h2 className="text-2xl mb-4 font-semibold text-center">Enviar Feedback</h2>
      <input
        type="text"
        placeholder="Seu nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border border-gray-300 p-2 rounded mb-4 w-full"
      />
      <input
        type="number"
        placeholder="Rating (1-5)"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        className="border border-gray-300 p-2 rounded mb-4 w-full"
        min="1"
        max="5"
      />
      <textarea
        placeholder="Descrição"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border border-gray-300 p-2 rounded mb-4 w-full"
        rows="4"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition"
      >
        Enviar Feedback
      </button>
      {message && <p className="mt-2 text-green-500 text-center">{message}</p>}
    </form>
  );
};

export default FeedbackForm;
