import React from 'react';
import { Link } from 'react-router-dom';

const WorkoutCard = ({ workout }) => {
  return (
    <div className="workout-card">
      <h4>{workout.name}</h4>
      <Link to={`/workout/${workout.id}`}>View Details</Link>
    </div>
  );
};

export default WorkoutCard;
