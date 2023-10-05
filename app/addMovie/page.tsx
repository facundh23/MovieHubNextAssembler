'use client'
import { createMovie } from '@/actions/movies.actions';
import { Movie } from '@/models/movies';
import { getAllGenres } from '@/services/genre.services';
import Link from 'next/link';
import { ChangeEvent } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import Modal from '@/components/Modal/Modal';




const AddMovieModal = async () => {



    return (
        <>
           
            <Modal />
        </>

    )
}

export default AddMovieModal