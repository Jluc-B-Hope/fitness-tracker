import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWorkouts } from '../redux/actions';

const App = () => {
  const dispatch = useDispatch();
  const workouts = useSelector(state => state.workouts);
  const error = useSelector(state => state.error);

  const [selectedWorkout, setSelectedWorkout] = useState(null);

  useEffect(() => {
    dispatch(fetchWorkouts());
  }, [dispatch]);

  // Функция для обработки клика на тренировку
  const handleWorkoutClick = (workout) => {
    setSelectedWorkout(workout);
  };

  return (
    <div className="container">
      <h1>Workouts</h1>

      {error ? (
        <p>Error loading workouts: {error}</p>
      ) : (
        <ul className="workout-list">
          {workouts.length > 0 ? (
            workouts.map((workout) => (
              <li
                key={workout.id}
                className="workout-item"
                onClick={() => handleWorkoutClick(workout)} // Обработчик клика
              >
                {workout.name} - {workout.category ? workout.category.name : 'No Category'}
              </li>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </ul>
      )}

      {/* Отображение подробностей о выбранной тренировке */}
      {selectedWorkout && (
        <div className="workout-details">
          <h2>{selectedWorkout.name}</h2>
          <div className="workout-description">
            <strong>Description:</strong>
            <div dangerouslySetInnerHTML={{ __html: selectedWorkout.description }} />
          </div>
          <p><strong>Category:</strong> {selectedWorkout.category ? selectedWorkout.category.name : 'No category available'}</p>
        </div>
      )}
    </div>
  );
};

export default App;
