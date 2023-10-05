import { Movie } from '@/models/movies'
import React from 'react'
import Modal from '@/components/Modal/Modal'
import Card from './Card'
import EditModal from '../Modal/EditModal'

type Props = {
    movies: Movie[]
}


const CardList = ({ movies }: Props) => {

    return (
        <div >
            {movies.map((movie) => {
                return <Card movie={movie} />
            })}
        </div>
    )
}

export default CardList