
import Image from 'next/image'
import Link from 'next/link'


export default function Home() {
  return (
    <main className=" h-full bg-transparent">
      <div className='flex flex-col w-[100%] items-center '>
        <div className=''>
          <Image src={"/assets/images/cine.jpg"} width={600} height={100} className='object-cover object-center rounded mt-5' alt={'movie Image'} />
        </div>

        <div className='hero-body flex items-center flex-col'>
          <h1 className='hero-title text-4xl mb-10 text-white'>Movie Hub Blog</h1>
          <p className='leading-relaxed text-2xl mb-6 text-white font-bold'> Hello! This is your web application to save your favorite movies and always have them with you in case you want to watch them again at any time.</p>
          <Link href={"/movies"} className='bg-green-400 hover:cursor-pointer p-6 w-[100%] text-2xl font-bold text-center hover:bg-green-800 transition duration-700'>Login</Link>
        </div>
      </div>
    </main>
  )
}
