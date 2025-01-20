const initialState = {
    exercises: [],
    loading: false,
  };
  
  const exerciseReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_EXERCISES_REQUEST':
        return { ...state, loading: true };
      case 'FETCH_EXERCISES_SUCCESS':
        return { ...state, exercises: action.payload, loading: false };
      default:
        return state;
    }
  };
  
  export default exerciseReducer;
  