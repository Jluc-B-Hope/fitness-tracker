export const fetchExercises = () => {
    return (dispatch) => {
      dispatch({ type: 'FETCH_EXERCISES_REQUEST' });
  
      setTimeout(() => {
        dispatch({
          type: 'FETCH_EXERCISES_SUCCESS',
          payload: [{ id: 1, name: 'Push Up' }, { id: 2, name: 'Squat' }],
        });
      }, 1000);
    };
  };
  