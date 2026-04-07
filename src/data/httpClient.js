const API_KEY = import.meta.env.VITE_TMDB_API_KEY;  
const BASE_URL = 'https://api.themoviedb.org/';    

export const fetchMovies = async (query) => {
  try {
    const response = await fetch(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
    );

    if (!response.ok) {
      throw new Error('Error al buscar películas');  
    }

    const data = await response.json();
    return data.results;

  } catch (error) {
    console.error('Error al buscar películas:', error);  
    return [];
  }
};