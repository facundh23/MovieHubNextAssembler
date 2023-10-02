'use client';

import Link from "next/link";
import { AiFillGithub } from 'react-icons/ai';
import { BiLogoLinkedinSquare } from 'react-icons/bi'

const Footer = () => {
    return (
        <footer className="py-24 text-center  bg-blue-400 ">
            <div className="flex flex-col">
                <section>
                    <h2 className='font-bold text-3xl'>Movie Hub</h2>
                    <p className="text-2xl text-gray-color">&copy; Assembler Ait 2023</p>
                </section>

                <section>

                    <div className='flex justify-center gap-2 text-black text-4xl'>
                        <Link href="/https://github.com/facundh23">
                            <i className='bx bxl-github bg-black'></i>
                            <AiFillGithub />
                        </Link>
                        <Link href="/https://www.linkedin.com/in/facundo-herrera-fullstack-developer/">
                            <BiLogoLinkedinSquare />
                        </Link>
                    </div>
                </section>
            </div>
        </footer>
    )
}

export default Footer