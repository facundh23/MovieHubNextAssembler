'use client';

import { usePathname } from 'next/navigation'
import Link from "next/link";
import Image from "next/image";


const routes = [
    {
        name: "Home",
        path: "/"
    },
    {
        name: "User",
        path: "/user"
    },
    {
        name: "Movies",
        path: "/movies"
    },
]

const Navbar = () => {
    const pathName = usePathname()

    return (
        <>

            <header>
                <nav className=' w-[100%] text-black font-bold flex justify-around items-center h-20 px-2 bg-nav-color rounded-md'>
                    <Link href={'/'} className=" max-w-[100] hidden md:block">
                        <Image src={'/assets/images/cinema3.jpg'} width={40} height={40} className=" w-full rounded-lg object-cover" alt={"Movie Logo Img"} />
                    </Link>

                    <input type="checkbox" id='menu' className='peer/menu hidden' />
                    <label htmlFor="menu" className='w-10 h-10 bg-open-menu bg-cover bg-center bg-red-500 z-20 cursor-pointer  rounded-lg peer-checked/menu:bg-close-menu transition-all md:hidden '></label>
                    <ul className="fixed inset-0 bg-menu-color px-[5%] grid gap-6 auto-rows-max content-center justify-items-center clip-circle-0 peer-checked/menu:clip-circle-full transition-[clip-path] duration-500 md:clip-circle-full md:relative md:grid-flow-col md:p-0 md:bg-transparent">

                        {
                            routes.map((route, i) => {
                                return (
                                    <li key={i}>
                                        <Link href={route.path}>{route.name}</Link>
                                    </li>
                                )
                            })
                        }

                    </ul>
                    <div className="hidden md:hidden lg:block">
                        <span>User Name | </span>
                        <span>Image</span>
                    </div>

                </nav>



            </header>
        </>

    )
}

export default Navbar