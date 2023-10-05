'use server'
import EditModal from '@/components/Modal/EditModal';
import { getMoviesDetailsById } from '@/services/movie.services';





type Props = {
    searchParams?: Record<string, string> | null | undefined,
    params: {
        movieId: string
    }
    id: string
    title: string;
    year: string;
    score: string;
    genres: string;
    sinopsis: string;
    poster_image: string;
}


const EditMovie = async ({ searchParams, params, title, year, score, genres, sinopsis, poster_image, id }: Props) => {

    const movie = await getMoviesDetailsById(params.movieId)

    if (!movie) return;

    return (

        <main className="mx-auto w-[100%] h-full mt-2 items-center justify-center md:flex-col md:w-[100%]" >

            <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto h-[95%]">
                <img className="mx-auto mt-2 p-5 object-scale-down " src={movie.poster_image} alt="Movie Image" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 text-center">{movie.title}</div>
                </div>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 text-center">{movie.sinopsis}</div>
                </div>
                <div className="px-6 pt-4 pb-2 flex justify-center">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{movie.year}</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{movie.score}</span>
                </div>

            </div>

            <EditModal movie={movie} />

        </main >
    )
}

export default EditMovie