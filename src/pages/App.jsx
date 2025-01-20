// App.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWorkouts } from '../redux/actions';
import '../assets/App.css';

const App = () => {
  const dispatch = useDispatch();
  const workouts = useSelector((state) => state.workouts);
  const error = useSelector((state) => state.error);

  useEffect(() => {
    dispatch(fetchWorkouts());
  }, [dispatch]);

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="container">
      <h1>Workouts</h1>
      {workouts.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {workouts.map((workout) => (
            <li key={workout.id}>
              {workout.name} - {workout.category.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
