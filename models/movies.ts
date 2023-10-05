export interface Movie {
  id: string;
  title: string;
  year: number | Blob;
  score: number | Blob;
  sinopsis: string;
  poster_image: FileList[];
  updatedAt: string;
  moviesId: string;
  genres: Genre[] | Blob;
}

export type Genre = {
  id: string;
  name: string;
  children: React.ReactNode;
};
