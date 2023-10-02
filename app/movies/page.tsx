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
            <Link className='absolute top-5 left-5 bg-cyan-300 p-2 rounded-md' href={"/movies/?modal=true"}>
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