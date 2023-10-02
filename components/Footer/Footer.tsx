'use client';

import Link from "next/link";
import { AiFillGithub } from 'react-icons/ai';
import { BiLogoLinkedinSquare } from 'react-icons/bi'

const Footer = () => {
    return (
        <footer className=" py-2 w-[100%] flex items-center justify-center text-center">
            <div className="flex items-center flex-col justify-center">
                <section>
                    <h2 className='font-bold text-3xl'>Movie Hub</h2>
                    <p className="text-2xl text-gray-color">&copy; Assembler Ait 2023</p>
                </section>

                <section>

                    <div className='flex justify-center items-center gap-2 text-white text-4xl md:flex lg:justify-center md:items-center md:justify-center'>
                        <Link href="https://github.com/facundh23">
                            <i className='bx bxl-github bg-white'></i>
                            <AiFillGithub />
                        </Link>
                        <Link href="https://www.linkedin.com/in/facundo-herrera-fullstack-developer/">
                            <BiLogoLinkedinSquare />
                        </Link>
                    </div>
                </section>
            </div>
        </footer>
    )
}

export default Footer