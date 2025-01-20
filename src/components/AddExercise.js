import React, { useState } from 'react';

function AddExercise() {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      console.log('Exercise added:', name);
      setName('');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Add new exercise"
        />
        <button type="submit">Add Exercise</button>
      </form>
    </div>
  );
}

export default AddExercise;
