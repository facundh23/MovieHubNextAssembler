
import React from 'react'
import Modal from '@/components/Modal/Modal';
import Link from 'next/link';

type Props = {
    searchParams?: Record<string, string> | null | undefined
}


const UserPage = ({ searchParams }: Props) => {
    const showModal = searchParams?.modal;
    return (
        <main>
            <Link className='absolute top-5 left-5 bg-cyan-300 p-2 rounded-md' href={"/user/?modal=true"}>
                Open Modal
            </Link>
            {showModal && <Modal />}

        </main>
    )
}

export default UserPage