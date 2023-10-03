'use-client'
import Card from '@/components/Card/Card'
import Modal from '@/components/Modal/Modal'
import Link from 'next/link'




type Props = {
    searchParams?: Record<string, string> | null | undefined
}

const MoviesPage = ({ searchParams }: Props) => {
    const showModal = searchParams?.modal;

    return (
        <main className='galery-container'>
            <Link className='hidden w-[20%] text-center absolute top-6 left-2 bg-blue-500 p-2 rounded-md font-bold md:top-9 lg:hidden transition duration-700 hover:bg-blue-800 sm:hidden' href={"/movies/?modal=true"}>
                Open Modal
            </Link>
            {showModal && <Modal />}


            <Card />
            <Card />
            <Card />
            <Card />
        </main>
    )
}

export default MoviesPage