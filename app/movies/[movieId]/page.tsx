


import EditModal from '@/components/Modal/EditModal';
import Spinner from '@/components/Spinner/Spinner';
import Link from 'next/link';


interface Movie {
    title: string;
    year: string;
    score: string;
    genres: string;
    poster_image: string;
}

// interface Tuser {
//   getAccessTokenSilently: () => Promise<GetTokenSilentlyVerboseResponse | undefined>
//   context?: React.Context<Auth0ContextInterface<Movie>> | undefined
// }

type Props = {
    searchParams?: Record<string, string> | null | undefined
}


const Movie = ({ searchParams }: Props) => {
    const showEditModal = searchParams?.editModal;

    // const { VITE_API_URL: url } = import.meta.env.local


    // const selectedMovie = movies ? movies?.find((movie: { id: string; }) => movie?.id === movieId) : movies;

    //   const handleDeleteMovie = () => {
    //     handleDeleteMovieById(`${url}/home/movies/${movieId}`, getAccessTokenSilently)
    //     setTimeout(() => {
    //       navigate('/home')
    //     }, 3000)
    //   }

    //   useEffect(() => {
    //     handleGetMoviesById(`${url}/home/movies/movie/${movieId}`, getAccessTokenSilently)
    //   }, [])


    return (

        <main className="mx-auto w-[100%] h-screen mt-2 items-center justify-center md:flex-col" >

            <>
                {/* {
                    (selectedMovie === undefined)
                        ?
                        <Spinner />
                        : */}
                <>
                    <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto h-[95%]">
                        <img className="mx-auto mt-2 p-5 object-scale-down " src={"assets/images/cine.jpg"} alt="Movie Image" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2 text-center">Movie title</div>

                        </div>
                        <div className="px-6 pt-4 pb-2 flex justify-center">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Movie Year</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Movie Score</span>
                        </div>
                    </div><div className='flex'>
                        <button className='text-center p-3 self-center w-[30%] bg-red-500 mt-3 mx-auto rounded-md md:w-[30%] ' onClick={() => console.log('deleted')}>Delete</button>
                        <Link href={"/"} className='text-center p-3 self-center w-[30%] bg-cyan-500 mt-3 mx-auto rounded-md font-bold'>Go Home</Link>
                        <Link href={"/movies/?editModal=true"} className='text-center p-3 self-center w-[30%] bg-cyan-500 mt-3 mx-auto rounded-md font-bold'>Edit Movie</Link>
                    </div>
                    {showEditModal && <EditModal />}</>
                {/* } */}
            </>

        </main>
    )
}

export default Movie