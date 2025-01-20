import React, { useMemo } from 'react';

const Filter = ({ workouts = [] }) => {  
  // Защищаем от undefined и выполняем фильтрацию только если workouts - это массив
  const filteredWorkouts = useMemo(() => {
    if (!Array.isArray(workouts)) {
      return []; // Если workouts не массив, возвращаем пустой массив
    }

    return workouts.filter(workout => workout.type === 'cardio');
  }, [workouts]);

  return (
    <div>
      <h3>Filtered Workouts</h3>
      {filteredWorkouts.length === 0 ? (
        <p>No workouts found</p>
      ) : (
        filteredWorkouts.map(workout => (
          <div key={workout.id}>{workout.name}</div>
        ))
      )}
    </div>
  );
};

export default Filter;
