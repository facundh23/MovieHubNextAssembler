'use client'
import React from 'react'
import Image from 'next/image';

import { useUser } from '@auth0/nextjs-auth0/client';



const UserPage = () => {

    const { user } = useUser();


    return (
        <main className='h-screen mt-5 flex flex-col items-center justify-center'>



            <div className='flex justify-start items-center w-[70%] h-[70%] flex-col mx-auto '>
                <Image src={user?.picture} width={400} height={100} alt={"User Image"} className='rounded-full w-[20%] shadow-2xl mt-12 h-[20%] object-cover object-center' />
                <h4 className='text-2xl font-bold'><span className='text-red'>Name:</span> {user?.name}</h4>
                <h4 className='text-2xl font-bold'>Email: {user?.email}</h4>
                <h4 className='text-2xl font-bold'>NickName: {user?.nickname}</h4>

            </div>




        </main>
    )
}

export default UserPage