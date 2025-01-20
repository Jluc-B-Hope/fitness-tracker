import React, { useState, useMemo } from 'react';

function Filter({ exercises }) {
  const [search, setSearch] = useState('');

  const filteredExercises = useMemo(() => {
    return exercises.filter((exercise) =>
      exercise.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, exercises]);

  return (
    <div>
      <input
        type="text"
        placeholder="Filter exercises"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {filteredExercises.map((exercise) => (
          <li key={exercise.id}>{exercise.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Filter;
