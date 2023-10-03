'use client'
import Link from 'next/link';
import { ReactNode, ChangeEvent } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2'



interface ModalProps {
    genres: string[]
    title: string
    year: number
    score: number
    file?: File | null
    children: ReactNode
}

type GenreItemsProps = {
    id: string | undefined,
    name: string | undefined,
    createdAt: string | undefined,
    updatedAt: string | undefined,
    moviesId: string | undefined,

}



const EditUserModal = () => {


    // const { movies, handleUpdateMovie } = useMovies()
    // const { movieId } = useParams();
    // const selectedMovie = movieId ? movies?.find((movie: { id: string; }) => movie.id === movieId) : undefined;
    // const { isAuthenticated, getAccessTokenSilently } = useAuth0();
    // const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm({
        defaultValues: {
            // UserName: selectedMovie?.title,
            // Image: selectedMovie?.year,

        }
    });
    // const { VITE_API_URL: url } = import.meta.env


    // const { genres } = useGenres();

    // if (!selectedMovie) return


    // const onSubmit = async (data: any): Promise<void> => {

    //     handleUpdateMovie(`${url}/home/movies/edit/${movieId}`, data, getAccessTokenSilently)
    //     const Toast = Swal.mixin({
    //         toast: true,
    //         position: 'top-end',
    //         showConfirmButton: false,
    //         timer: 3000,
    //         timerProgressBar: true,
    //         didOpen: (toast) => {
    //             toast.addEventListener('mouseenter', Swal.stopTimer)
    //             toast.addEventListener('mouseleave', Swal.resumeTimer)
    //         }
    //     })

    //     Toast.fire({
    //         icon: 'success',
    //         title: 'Upload in successfully'
    //     })

    //     setTimeout(() => {
    //         navigate(`/home`)
    //         reset();
    //     }, 3000)
    // }


    return (
        <>
            <div className='p-4'>



                <div className="w-[100%] fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center lg:w-[50%] lg:mx-auto lg:h-[70%] lg:mt-11 z-40">
                    <form className='w-[70%] h-1/2 mx-auto border-x-cyan-500 border-y-black border-4 flex flex-col p-5 mt-[10%] gap-2 md:w-[80%] md:mx-auto transition-all duration-500 lg:w-[80%]'>
                        <h5 className='text-center mb-2 text-white font-bold'>Update Your Data</h5>
                        <input placeholder='User Name' className=' p-2 rounded-md border-2 border-black lg:w-[50%] mx-auto' {...register("userName", {
                            required: {
                                value: true,
                                message: "Please enter a UserName"
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
                        {errors.userName && <span className='text-red-500 block'>{errors?.userName?.message?.toString()}</span>}



                        <input type='file' className=' w-[70%] mb-2 mt-6 py-1 rounded-md mx-auto bg-cyan-400 p-2 md:w-[50%] lg:w-[50%]' onChange={(e: ChangeEvent<HTMLInputElement>) => {
                            setValue('image', e.target.files && e.target!.files[0])
                        }} />

                        {errors.files && <p className='text-red-500 block'>{errors?.files?.message?.toString()}</p>}

                        <button className='bg-cyan-600 text-white mb-2 w-36 self-center  rounded-md hover:bg-cyan-800 transition-all duration-700 lg:w-[50%] p-2' type='submit' disabled={false}>
                            Update Data
                        </button>
                        <Link className='bg-red-500 p-2 w-[20%] text-center mx-auto absolute top-10 rounded-md' href={"/user"}>
                            Close Modal
                        </Link>

                    </form >

                </div>
            </div >
        </>
    )
}

export default EditUserModal