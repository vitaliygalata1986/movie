import { API_URL } from "./config";

//  получим категроии всех movie
const getAllMovies = async () => {
  const response = await fetch(`${API_URL}&s=all&y=2024`);
  if (response.ok) {
    return await response.json();
  }
  throw new Error(
    ` Ошибка по адресу ${response.url}, статус ошибки ${response.status} `
  );
};

// Movie - выбор фильма по id
const getMovie = async (id) => {
  // https://www.omdbapi.com/?apikey=b66c2a72&i=tt28959685
  const response = await fetch(API_URL + `&i=${id}`);
  if (response.ok) {
    return await response.json();
  }
  throw new Error(
    ` Ошибка по адресу ${response.url}, статус ошибки ${response.status} `
  );
};

// search radio

const getSelectedMovie = async (str, type, year) => {
  // console.log(str);
  const response = await fetch(
    `${API_URL}&s=${str ? str : "all"}${
      type !== "all" ? `&type=${type}` : ""
    }&y=${year}`
  );
  if (response.ok) {
    return await response.json();
  }
  throw new Error(
    ` Ошибка по адресу ${response.url}, статус ошибки ${response.status} `
  );
};

export { getAllMovies, getMovie, getSelectedMovie };
