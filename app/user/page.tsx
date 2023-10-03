
import React from 'react'
import Modal from '@/components/Modal/Modal';
import Link from 'next/link';
import Image from 'next/image';

import EditUserModal from '@/components/Modal/EditModalUser';


type Props = {
    searchParams?: Record<string, string> | null | undefined
}


const UserPage = ({ searchParams }: Props) => {
    const showModal = searchParams?.modal;
    const editUserModal = searchParams?.editUserModal;

    return (
        <main className='h-screen mt-10 flex flex-col items-center justify-center'>
            <Link className='hideen ' href={"/user/?modal=true"}>

            </Link>


            <div className='flex justify-center items-center w-[70%] h-[80%] flex-col mx-auto '>
                <Image src={"/assets/images/cine.jpg"} width={400} height={100} alt={"User Image"} className='rounded-lg mb-16 w-[100%] shadow-2xl mt-12 h-[100%] object-cover object-center' />
                <h4 className='text-2xl'>User Name</h4>
                <Link href={"/user/?editUserModal=true"} className='bg-yellow-400 mt-12 p-4 font-bold rounded-md w-[50%] text-center'>Edit user</Link>
            </div>
            {showModal && <Modal />}
            {editUserModal && <EditUserModal />}


        </main>
    )
}

export default UserPage