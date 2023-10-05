import { Movie } from "@/models/movies";

export const getAllMovies = async () => {
  const response = await fetch("http://localhost:8081/home");
  const data = await response.json();
  return data as Movie[];
};

export const getMoviesDetailsById = async (id: string) => {
  const response = await fetch(`http://localhost:8081/home/movies/movie/${id}`);
  const data = await response.json();
  return data as Movie;
};
