const initialState = {
  workouts: [],
  error: null,
};

export const workoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_WORKOUTS_SUCCESS':
      return { ...state, workouts: action.payload };
    case 'FETCH_WORKOUTS_FAILURE':
      return { ...state, error: action.error };
    default:
      return state;
  }
};
