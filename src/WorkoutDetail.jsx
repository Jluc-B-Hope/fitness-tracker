import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const WorkoutDetail = () => {
  const { id } = useParams();
  const workouts = useSelector((state) => state.workouts);
  const workout = workouts.find((workout) => workout.id === parseInt(id, 10));

  if (!workout) {
    return <p className="error-message">Workout not found or still loading...</p>;
  }

  const extractStepsFromDescription = (description) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(description, 'text/html');
    const stepsList = doc.querySelectorAll('ol > li');
    return Array.from(stepsList).map((step) => step.textContent);
  };

  const steps =
    workout.steps && workout.steps.length > 0
      ? workout.steps
      : extractStepsFromDescription(workout.description || '');

  return (
    <div className="workout-detail">
      <h1 className="workout-title">{workout.name}</h1>
      <p className="category">
        <strong>Category:</strong> {workout.category ? workout.category.name : 'No Category'}
      </p>
      <section className="description">
        <h2>Description:</h2>
        <div
          dangerouslySetInnerHTML={{
            __html: workout.description || '<p>No description available.</p>',
          }}
        />
      </section>
      <section className="steps">
        <h2>Steps:</h2>
        {steps.length > 0 ? (
          <ol>
            {steps.map((step, index) => (
              <li key={index} className="step-item">
                {step}
              </li>
            ))}
          </ol>
        ) : (
          <p>No steps available for this workout.</p>
        )}
      </section>
    </div>
  );
};

export default WorkoutDetail;
