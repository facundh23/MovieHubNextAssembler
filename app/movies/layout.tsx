import Navbar from '@/components/Navbar/Navbar'
import React from 'react'


type Props = {
    children: React.ReactNode
}

function layout({ children }: Props) {
    return (
        <>
            <Navbar />
            <div className='bg-red-500  flex items-center flex-col w-[100%] justify-start'>
                {children}
            </div>
        </>
    )
}

export default layout