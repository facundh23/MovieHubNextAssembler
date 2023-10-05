import Navbar from '@/components/Navbar/Navbar'
import React from 'react'


type Props = {
    children: React.ReactNode
}

function layout({ children }: Props) {
    return (
        <>
            <Navbar />
            <div className='flex items-center flex-col w-[100%] justify-start text-white'>

                {children}
            </div>
        </>
    )
}

export default layout