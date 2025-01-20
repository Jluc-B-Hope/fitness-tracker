import axios from 'axios';

const API_URL = 'https://wger.de/api/v2/exercise/?limit=20&offset=20';

export const fetchWorkouts = () => {
  return async (dispatch) => {
    try {
      // Получение данных с внешнего API
      const response = await axios.get(API_URL);
      const data = response.data.results; // Упражнения возвращаются в results

      console.log("Fetched workouts:", data);  // Логирование данных

      dispatch({ type: 'FETCH_WORKOUTS_SUCCESS', payload: data });
    } catch (error) {
      console.error("Error fetching workouts:", error);  // Логирование ошибки
      dispatch({ type: 'FETCH_WORKOUTS_FAILURE', error: error.message });
    }
  };
};
