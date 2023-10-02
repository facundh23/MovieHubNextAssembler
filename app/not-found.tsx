import Link from 'next/link'



const NotFound = () => {
    return (
        <div className='bg-red-500 h-screen w-[90%]'>
            <h1>Not Found</h1>
            <Link href='/'>Go Home</Link>
        </div>
    )
}

export default NotFound