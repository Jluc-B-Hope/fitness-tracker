import React from 'react';

const WorkoutCard = ({ workout }) => {
  return (
    <div className="workout-card">
      <h3>{workout.name}</h3>
      <p>Type: {workout.type}</p>
    </div>
  );
};

export default WorkoutCard;
