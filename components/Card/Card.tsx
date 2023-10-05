'use client'
import { Movie } from '@/models/movies'
import { deleteMovieById } from '@/actions/movies.actions'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import Swal from 'sweetalert2'


type Props = {
    movie: Movie,
    searchParams?: Record<string, string> | null | undefined,
}


const Card = async ({ movie, searchParams }: Props) => {
    const { title, poster_image, score, year, id, genres, sinopsis } = movie
    const router = useRouter();


    const stars = (data: React.ReactNode) => {
        switch (data) {
            case 1:
                return '⭐'
            case 2:
                return '⭐⭐'

            case 3:
                return '⭐⭐⭐'

            case 4:
                return '⭐⭐⭐⭐'

            case 5:
                return '⭐⭐⭐⭐⭐'

            default:
                break;
        }
    }

    const scoreStar = stars(movie.score);


    const handleDelete = async (id: string) => {


        await deleteMovieById(id)
        router.refresh();
        router.push("/movies")


        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })

        Toast.fire({
            icon: 'success',
            title: 'Deleted successfully'
        })



    }
    return (
        <div className="w-[100%] h-[70%]  sm:w-[100%] rounded overflow-hidden md:w-[100%] p-4 lg:w-[100%] text-center font-bold shadow-2xl hover:scale-90 transition duration-700 hover:cursor-pointer hover:bg-gray-400">
            <Image src={poster_image} width={800} height={50} alt={"Movie Logo Img"} className='w-[100%] h-[90%] md:h-[50%]' />
            {/* <div className="px-6 py-3"> */}
            <p className="font-bold text-black text-xl mb-2">{title}</p>
            <p className="text-base text-black dark:bg-black dark:text-white text-center">
                {sinopsis}
            </p>
            <p className="text-black dark:bg-black dark:text-white text-base">
                {year}
            </p>
            <span key={score}>{scoreStar}</span>
            {/* </div> */}

            {
                !genres ? <p className='text-black'>No Genres</p> : <div className='flex w-[100%] h-[80%] items-center justify-center'>
                    {genres.map((genre) => {
                        return <p key={genre.name} className='text-center text-black flex w-[20%] justify-center items-center ml-2'>{genre?.name}</p>
                    })}

                </div>
            }

            <div className="flex items-center justify-between">
                <Link className='text-center p-3 self-center w-[25%] bg-orange-500 mt-3 mx-auto rounded-md font-bold hover:bg-green-200 sm:w-[30%]' href={`/movies/${id}`}>Edit</Link>
                <button className='text-center p-3 self-center w-[35%] bg-red-500 mt-3 mx-auto rounded-md font-bold hover:bg-green-200 sm:w-[40%]' onClick={() => handleDelete(id)}>Delete</button>
            </div>


        </div>
    )
}

export default Card