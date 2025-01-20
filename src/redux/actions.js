import axios from 'axios';

const API_URL = 'https://wger.de/api/v2/exercise/?limit=20&offset=20';

export const fetchWorkouts = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(API_URL);
      const data = response.data.results;

      // Добавим категорию, если она есть
      const workoutsWithCategory = data.map(workout => ({
        ...workout,
        category: workout.category ? workout.category.name : 'No Category', // Если категория есть
      }));

      dispatch({ type: 'FETCH_WORKOUTS_SUCCESS', payload: workoutsWithCategory });
    } catch (error) {
      dispatch({ type: 'FETCH_WORKOUTS_FAILURE', error: error.message });
    }
  };
};
