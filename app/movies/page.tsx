
import CardList from '@/components/Card/CardList'
import { getAllMovies } from '@/services/movie.services'



const MoviesPage = async () => {


    const movies = await getAllMovies();


    return (
        <main className='galery-container'>

            <CardList movies={movies} />

        </main>
    )
}

export default MoviesPage