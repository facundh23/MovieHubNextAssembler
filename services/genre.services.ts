type GenreProp = {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  moviesId: string;
};
export const getAllGenres = async () => {
  const response = await fetch("http://localhost:8081/genres");
  const data = await response.json();
  return data as GenreProp[];
};
