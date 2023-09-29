'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";




const Navbar = () => {


    return (
        <>

            <header>
                <nav className=' w-[100%] text-black font-bold flex justify-between items-center h-20 px-2'>
                    <Link href={'/'} className=" border-r-4 max-w-[100]">
                        <Image src={'/assets/images/moviehub.png'} width={50} height={50} className="block w-full" alt={"Movie Logo Img"} />
                    </Link>

                    <input type="checkbox" id='menu' className='peer/menu hidden' />
                    <label htmlFor="menu" className='w-10 h-10 bg-open-menu bg-cover bg-center bg-red-500 z-20 cursor-pointer rounded-lg peer-checked/menu:bg-close-menu transition-all md:hidden'></label>
                    <ul className="fixed inset-0 bg-menu-color px-[5%] grid gap-6 auto-rows-max content-center justify-items-center clip-circle-0 peer-checked/menu:clip-circle-full transition-[clip-path] duration-500 md:clip-circle-full md:relative md:grid-flow-col md:p-0 md:bg-transparent">

                        <li>
                            <Link href={"/movies"}>movies</Link>
                        </li>
                        <li>
                            <Link href={"/user"}>About</Link>
                        </li>

                    </ul>


                </nav>



            </header>
        </>

    )
}

export default Navbar