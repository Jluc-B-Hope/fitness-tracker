import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { fetchWorkouts } from './redux/actions';
import SearchBar from './SearchBar';
import WorkoutDetail from './WorkoutDetail';

const App = () => {
  const dispatch = useDispatch();
  const workouts = useSelector(state => state.workouts);
  const error = useSelector(state => state.error);

  const [filteredWorkouts, setFilteredWorkouts] = useState([]);

  useEffect(() => {
    dispatch(fetchWorkouts());
  }, [dispatch]);

  useEffect(() => {
    setFilteredWorkouts(workouts); // Обновляем фильтрованный список при изменении данных
  }, [workouts]);

  const handleSearch = (searchTerm) => {
    const filtered = workouts.filter(workout =>
      workout.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredWorkouts(filtered);
  };

  return (
    <Router>
      <div className="container">
        <h1>Workouts</h1>

        <SearchBar onSearch={handleSearch} />

        {error ? (
          <p>Error loading workouts: {error}</p>
        ) : (
          <ul className="workout-list">
            {filteredWorkouts.length > 0 ? (
              filteredWorkouts.map((workout) => (
                <li key={workout.id}>
                  <a href={`/workout/${workout.id}`}>
                    {workout.name} - {workout.category ? workout.category.name : 'No Category'}
                  </a>
                </li>
              ))
            ) : (
              <p>Loading...</p>
            )}
          </ul>
        )}

        <Routes>
          <Route path="/workout/:id" element={<WorkoutDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
