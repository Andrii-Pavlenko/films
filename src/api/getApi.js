const API_URL = process.env.REACT_APP_API_URL;
const FILM_URL = `${API_URL}/films`;

export const getFilms = async () => {
  const response = await fetch(FILM_URL);

  return response.json();
};

export const addFilm = async (title, year, format, stars, image) => {
  const response = await fetch(FILM_URL, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify({ title, year, format, stars, image }),
  });

  return response.json();
};

export const removeFilm = async (filmId) => {
  const response = await fetch(`${FILM_URL}/${filmId}`, {
    method: 'delete',
  });

  return response.json();
};
