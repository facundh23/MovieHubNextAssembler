'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'



const Card = ({ score }: any) => {

    const stars = (data: React.ReactNode) => {
        switch (data) {
            case 1:
                return '⭐'
            case 2:
                return '⭐⭐'
                break;
            case 3:
                return '⭐⭐⭐'
                break;
            case 4:
                return '⭐⭐⭐⭐'
                break;
            case 5:
                return '⭐⭐⭐⭐⭐'
                break;
            default:
                break;
        }
    }

    const scoreStar = stars(score);

    return (
        <div className="max-w-md  rounded overflow-hidden shadow-lg h-2/4 galery-item md:h-[40%] md:w-[100%] text-black  dark:text-white">
            <Image src={'/assets/images/cinema3.jpg'} width={300} height={50} alt={"Movie Logo Img"} className='w-[100%] h-[80%] md:h-[50%]' />
            <div className="px-6 py-3">
                <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                <p className="text-base text-black dark:bg-black dark:text-white">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
                <p className="text-black dark:bg-black dark:text-white text-base">
                    Released Year
                </p>
                <span key={score}>{scoreStar}</span>
            </div>
            <div className='flex w-[100%] h-[80%] items-center justify-center'>
                <p className='font-bold text-black dark:bg-black dark:text-white'>Genres </p>
                {
                    // genres?.map((genre: genreProps) => {
                    //   return <p key={genre.name} className='text-center flex w-[20%] justify-center items-center ml-2'> {genre?.name}</p>
                }

                {/* } */}
            </div>
            <div className="px-6 pt-4 pb-2 flex gap-4 items-center justify-center">
                <Link className='border-x-2 shadow-md hover:bg-amber-700 hover:font-bold p-3 rounded-md' href={"/"}>Home</Link>
                <Link className='border-x-2 shadow-md hover:bg-blue-300 hover:font-bold  p-3 rounded-md' href={"/movies/:id"}>Details</Link>
            </div>
        </div>
    )
}

export default Card