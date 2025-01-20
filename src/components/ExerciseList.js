import React, { useCallback } from 'react';

function ExerciseList({ exercises }) {
  const renderExercise = useCallback((exercise) => {
    return <li key={exercise.id}>{exercise.name}</li>;
  }, []);

  return <ul>{exercises.map(renderExercise)}</ul>;
}

export default ExerciseList;
