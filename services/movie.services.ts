import { Movie } from "@/models/movies";
import { revalidatePath } from "next/cache";
// import { revalidateTag } from "next/cache";

export const getAllMovies = async () => {
  const response = await fetch("http://localhost:8081/home", {
    next: { tags: ["getAllMovies"] },
  });
  const data = await response.json();
  return data as Movie[];
};

export const getMoviesDetailsById = async (id: string) => {
  const response = await fetch(`http://localhost:8081/home/movies/movie/${id}`);
  const data = await response.json();
  return data as Movie;
};

export const createMovie = async (url: string, data: Movie) => {
  console.log(data);
  try {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("sinopsis", data.sinopsis);
    formData.append("year", data.year);
    formData.append("score", data.score);
    formData.append("poster_image", data.poster_image.item(0));
    formData.append("genres", data.genres);
    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      revalidatePath("/movies");
    }
  } catch (error) {
    console.log(error);
  }
};
