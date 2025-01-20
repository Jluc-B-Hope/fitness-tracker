import React from 'react';

const FilteredWorkouts = ({ workouts }) => {
  return (
    <div>
      <h2>Filtered Workouts</h2>
      {workouts.length > 0 ? (
        workouts.map((workout) => (
          <div key={workout.id}>
            <h3>{workout.name}</h3>
            <p>{workout.type}</p>
          </div>
        ))
      ) : (
        <p>Нет доступных тренировок</p>
      )}
    </div>
  );
};

export default FilteredWorkouts;