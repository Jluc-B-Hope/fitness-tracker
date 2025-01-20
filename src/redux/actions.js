import axios from 'axios';

const API_URL = 'https://wger.de/api/v2/exercise/?limit=20&offset=20';

export const fetchWorkouts = () => {
  return async (dispatch) => {
    try {
      // Получение данных с внешнего API
      const response = await axios.get(API_URL);
      const data = response.data.results; // Упражнения возвращаются в results

      dispatch({ type: 'FETCH_WORKOUTS_SUCCESS', payload: data });
    } catch (error) {
      dispatch({ type: 'FETCH_WORKOUTS_FAILURE', error: error.message });
    }
  };
};
