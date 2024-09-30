import React from 'react';

const FeedbackList = ({ feedbacks }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl mb-4 font-semibold text-center">Lista de Feedbacks</h2>
      {feedbacks.length > 0 ? (
        feedbacks.map((feedback) => (
          <div key={feedback.id} className="border border-gray-300 p-4 rounded mb-4 shadow-sm transition transform hover:scale-105">
            <p className="font-bold">Nome: {feedback.name}</p>
            <p className="font-semibold">Rating: {feedback.rating}</p>
            <p className="text-gray-700">Descrição: {feedback.description}</p>
            <p className="text-gray-500 text-sm">{new Date(feedback.created_at).toLocaleString()}</p>
          </div>
        ))
      ) : (
        <p className="text-gray-500 text-center">Nenhum feedback disponível.</p>
      )}
    </div>
  );
};

export default FeedbackList;
