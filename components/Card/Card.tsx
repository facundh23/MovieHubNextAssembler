'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

const Card = (props: Props) => {
    return (
        <div className="max-w-md rounded overflow-hidden shadow-lg h-2/4 galery-item">
            <Image src={'/assets/images/cinema3.jpg'} width={300} height={50} alt={"Movie Logo Img"} />
            <div className="px-6 py-3">
                <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
            </div>
            <div className="px-6 pt-4 pb-2 flex gap-4 items-center justify-center">
                <Link className='border-x-2 shadow-md hover:bg-amber-700 hover:font-bold p-3 rounded-md' href={"/"}>Home</Link>
                <Link className='border-x-2 shadow-md hover:bg-blue-300 hover:font-bold  p-3 rounded-md' href={"/movies/:id"}>Details</Link>
            </div>
        </div>
    )
}

export default Card