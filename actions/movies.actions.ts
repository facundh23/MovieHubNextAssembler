"use server";
import { Movie } from "@/models/movies";
import { revalidateTag } from "next/cache";

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
    });
    if (response.ok) {
      revalidateTag("getAllMovies");
    }
  } catch (error) {
    console.log(error);
  }
};

export const deleteMovieById = async (movieId: string) => {
  const response = await fetch(`http://localhost:8081/home/movies/${movieId}`, {
    method: "DELETE",
    next: { revalidate: 10 },
  });
  if (response.ok) {
    revalidateTag("getAllMovies");
  }
  return await response.json();
};
