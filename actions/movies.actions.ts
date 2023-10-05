import { Movie } from "@/models/movies";

export const createMovie = async (data: Movie) => {
  console.log(data);
  try {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("sinopsis", data.sinopsis);
    formData.append("year", data.year);
    formData.append("score", data.score);
    formData.append("poster_image", data.poster_image);
    formData.append("genres", data.genres);
    await fetch("http://localhost:8081/home/movies", {
      method: "POST",
      body: formData,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateMovieById = async (url: string, data: Movie) => {
  try {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("sinopsis", data.sinopsis);
    formData.append("year", data.year);
    formData.append("score", data.score);
    const response = await fetch(url, {
      method: "PUT",
      body: formData,
      cache: "no-store",
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteMovieById = async (movieId: string) => {
  const response = await fetch(`http://localhost:8081/home/movies/${movieId}`, {
    method: "DELETE",
  });
  return await response.json();
};
