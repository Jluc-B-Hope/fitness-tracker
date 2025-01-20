import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ExerciseList from '../components/ExerciseList';
import AddExercise from '../components/AddExercise';
import Filter from '../components/Filter';
import { fetchExercises } from '../redux/actions/exerciseActions';
import withAuth from '../HOC/withAuth';

function Home() {
  const dispatch = useDispatch();
  const exercises = useSelector(state => state.exercises);

  useEffect(() => {
    dispatch(fetchExercises());
  }, [dispatch]);

  return (
    <div>
      <h2>Manage Your Exercises</h2>
      <Filter exercises={exercises} />
      <AddExercise />
      <ExerciseList exercises={exercises} />
    </div>
  );
}

export default withAuth(Home);
