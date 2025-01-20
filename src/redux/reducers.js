const initialState = {
    user: null,
    workouts: [],
    // другие данные, которые хотите хранить в Redux
  };
  
  function rootReducer(state = initialState, action) {
    switch (action.type) {
      case 'SET_USER':
        return { ...state, user: action.payload };
      case 'ADD_WORKOUT':
        return { ...state, workouts: [...state.workouts, action.payload] };
      default:
        return state;
    }
  }
  
  export default rootReducer;
  