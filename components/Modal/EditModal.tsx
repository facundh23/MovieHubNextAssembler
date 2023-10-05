'use client'

import { updateMovieById } from '@/actions/movies.actions';
import next from 'next';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2'



const EditModal = async ({ movie }: any) => {
    const { id, title, year, score, sinopsis, poster_image } = movie
    const router = useRouter();
    const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm({
        defaultValues: {
            title: title,
            sinopsis: sinopsis,
            year: year,
            score: score,


        }
    });

    const onSubmit = async (data: any): Promise<void> => {

        console.log(data)
        updateMovieById(`http://localhost:8081/home/movies/edit/${id}`, data);
        router.refresh();
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })

        Toast.fire({
            icon: 'success',
            title: 'Upload in successfully'
        })


        router.push("/movies")




    }

    return (
        <>

            <div className="w-[100%] fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-start lg:w-[50%] lg:mx-auto lg:h-[100%] lg:mt-11 lg:mb-10">
                <form onSubmit={handleSubmit(onSubmit)} className='w-[70%] h-full mx-auto border-x-cyan-500 border-y-black border-4 flex flex-col p-5 mt-[10%] gap-2 md:w-[80%] md:mx-auto transition-all duration-500 lg:w-[80%]'>
                    <h5 className='text-center text-2xl mb-2'>Edit Your Movie</h5>
                    <label className='font-bold text-black  text-2xl'>Title</label>
                    <input placeholder='Movie Title' className='mb-4 p-2 rounded-md text-black font bold border-2 border-black ' {...register("title", {
                        required: {
                            value: true,
                            message: "Please enter a title"
                        },
                        minLength: {
                            value: 5,
                            message: "Minumun length is 5",
                        },
                        maxLength: {
                            value: 15,
                            message: "Maximum length is 15"

                        }
                    })} />
                    {errors.title && <span className='text-red-500 block'>{errors?.title?.message?.toString()}</span>}
                    <label className='font-bold text-black  text-2xl'>Description</label>
                    <input placeholder='Movie Description' className='mb-4 p-2 rounded-md text-black font bold border-2 border-black ' {...register("sinopsis", {
                        required: {
                            value: true,
                            message: "Please enter a Description"
                        },
                        minLength: {
                            value: 5,
                            message: "Minumun length is 10",
                        },
                        maxLength: {
                            value: 15,
                            message: "Maximum length is 30"

                        }
                    })} />
                    {errors.sinopsis && <span className='text-red-500 block'>{errors?.sinopsis?.message?.toString()}</span>}
                    <label className='font-bold text-black  text-2xl'>Year</label>
                    <input type='number' placeholder='Released' className='mb-2 py-1 rounded-md text-black border-2 border-black px-2' {...register("year", {
                        required: true,
                        pattern: {
                            value: /^\d{4}$/,
                            message: "Please enter a valid year"
                        }
                    }
                    )} />

                    {errors.year && <p className='text-red-500 block'>{errors?.year?.message?.toString()}</p>}
                    <label className='font-bold text-black  text-2xl'>Score</label>
                    <input type='number' placeholder='Score' className='mb-4 py-1 rounded-md border-2 text-black border-black px-2' {...register("score", {
                        required: {
                            value: true,
                            message: "Please enter a score"
                        }, min: {
                            value: 1,
                            message: "Minimun length is 1",
                        },
                        max: {
                            value: 5,
                            message: "Maximum length is 5"

                        }
                    })} />
                    {errors.score && <p className='text-red-500 block'>{errors?.score?.message?.toString()}</p>}



                    <button className='bg-violet-600 text-white mb-2 w-36 self-center p-1 rounded-md hover:bg-violet-800 transition-all duration-700' type='submit' disabled={false}>
                        Edit Movie
                    </button>
                    <Link className='bg-red-500 p-2 w-[20%] text-center mx-auto absolute top-10' href={"/movies"}>
                        Close Modal
                    </Link>
                </form >






            </div>

        </>
    )
}

export default EditModal