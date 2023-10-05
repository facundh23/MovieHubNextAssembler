const MoviesModal = async () => {

    const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm();
    const genres = await getAllGenres();


    const onSubmit = async (url, data: Movie) => {
        console.log(data)
        createMovie("http://localhost:8081/home/movies", data)
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

        // setTimeout(() => {

        //     reset();
        // }, 3000)

    }



    return (
        <>
            <div className="w-[100%] fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center md:h-[screen] lg:w-[100%] lg:mx-auto lg:h-[100%] lg:mt-11 z-40">
                <form className='w-[70%] h-200 mx-auto border-x-cyan-500 border-y-black border-4 flex flex-col p-6 mt-[10%] gap-2 md:w-[80%] md:mx-auto transition-all duration-500' onSubmit={handleSubmit(onSubmit)}>
                    <h5 className='text-center mb-2 text-white font-bold'>Upload Your Movie</h5>
                    <input placeholder='Movie Title' className='mb-4 p-2 rounded-md border-2 border-black ' {...register("title", {
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
                    <input placeholder='Movie Description' className='mb-4 p-2 rounded-md border-2 border-black ' {...register("sinopsis", {
                        required: {
                            value: true,
                            message: "Please enter a description"
                        },
                        minLength: {
                            value: 10,
                            message: "Minumun length is 10",
                        },
                        maxLength: {
                            value: 30,
                            message: "Maximum length is 30"

                        }
                    })} />
                    {errors.sinopsis && <span className='text-red-500 block'>{errors?.sinopsis?.message?.toString()}</span>}

                    <input type='number' placeholder='Released' className='mb-2 py-1 rounded-md border-2 border-black px-2' {...register("year", {
                        required: true,
                        pattern: {
                            value: /^\d{4}$/,
                            message: "Please enter a valid year"
                        }
                    }
                    )} />

                    {errors.year && <p className='text-red-500 block'>{errors?.year?.message?.toString()}</p>}

                    <input type='number' placeholder='Score' className='mb-4 py-1 rounded-md border-2 border-black px-2' {...register("score", {
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

                    <div className='flex items-center justify-between'>
                        {
                            genres && genres?.map(({ id, name }) => {

                                return (
                                    < div key={id} className='flex flex-col'>
                                        <p className='text-center font-bold'>{name}</p>
                                        <input type='checkbox' value={id} className='rounded-md border-2 border-black mx-auto'  {...register('genres', {
                                            required: {
                                                value: true,
                                                message: "Please enter a genre"
                                            }
                                        })} />

                                    </div>

                                )
                            })
                        }
                    </div>

                    {errors.genres && <p className='text-red-500 font-bold'>{errors?.genre?.message?.toString()}</p>}

                    <input type='file' className='mb-2 mt-6 py-1 rounded-md' onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        setValue('poster_image', e.target.files && e.target!.files[0])
                    }} />

                    {errors.files && <p className='text-red-500 block'>{errors?.files?.message?.toString()}</p>}

                    <button className='bg-cyan-600 text-white mb-2 w-36 self-center p-1 rounded-md hover:bg-cyan-800 transition-all duration-700 font-bold' type='submit' disabled={false}>
                        Upload
                    </button>
                    <Link className='bg-red-500 p-2 w-[20%] text-center mx-auto absolute top-10 font-bold rounded-md' href={"/movies"}>
                        Close Modal
                    </Link>

                </form >
            </div>
        </>

    )
}

export default MoviesModal