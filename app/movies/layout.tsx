import React from 'react'


type Props = {
    children: React.ReactNode
}

function layout({ children }: Props) {
    return (
        <div className='bg-red-500 h-screen flex items-center flex-col w-[100%] justify-start'>
            Layout De Movies
            {children}
        </div>
    )
}

export default layout