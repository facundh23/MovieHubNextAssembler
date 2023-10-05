'use client'
import Modal from '@/components/Modal/Modal';
import { useUser } from '@auth0/nextjs-auth0/client';
import { getAllGenres } from '../../services/genre.services';

const MoviesModal = async () => {
    const { user } = useUser();
    const genres = await getAllGenres();

    return (
        <>
            <Modal user={user} genres={genres} />
        </>

    )
}

export default MoviesModal