import React, { useEffect, useState } from 'react';
import axios from 'axios';

function MentoringList() {
  const [mentorings, setMentorings] = useState([]);
  
  useEffect(() => {
    const fetchMentorings = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/mentorings/');
        setMentorings(response.data);
      } catch (error) {
        console.error('Error fetching mentorings:', error);
      }
    };

    fetchMentorings();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Mentorings</h1>
      <ul className="list-disc pl-5">
        {mentorings.length === 0 ? (
          <li className="text-gray-500">Nenhuma mentoria disponível.</li>
        ) : (
          mentorings.map(mentoring => (
            <li key={mentoring.id} className="border-b py-2">{mentoring.title}</li>
          ))
        )}
      </ul>
    </div>
  );
}

export default MentoringList;
