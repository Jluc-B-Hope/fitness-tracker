import React, { useState, useEffect } from 'react';
import Filter from '../components/Filter';

const Home = () => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    // Имитируем загрузку данных
    setWorkouts([
      { id: 1, name: 'Running', type: 'cardio' },
      { id: 2, name: 'Cycling', type: 'cardio' },
      { id: 3, name: 'Yoga', type: 'strength' },
    ]);
  }, []);

  return (
    <div>
      <Filter workouts={workouts} />
    </div>
  );
};

export default Home;

