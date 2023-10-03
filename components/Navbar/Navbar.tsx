'use client';
import Link from "next/link";
import Image from "next/image";



const routes = [

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


    return (
        <>

            <header>
                <nav className=' w-[100%]  font-bold flex justify-end items-center mt-10 gap-5 h-28 px-2 bg-cyan-300 rounded-md md:justify-between sm:justify-between dark:bg-blue-800 '>
                    <input type="text" placeholder="Search Your Movie" className="hidden md:block md:p-3" />


                    <input type="checkbox" id='menu' className='peer/menu hidden' />
                    <label htmlFor="menu" className=' ml-100 w-10 h-10 bg-open-menu bg-cover bg-center bg-red-500 z-20 cursor-pointer  rounded-lg peer-checked/menu:bg-close-menu transition-all md:hidden '></label>
                    <ul className="fixed inset-0 bg-menu-color px-[5%] grid gap-6 auto-rows-max content-center justify-items-center clip-circle-0 peer-checked/menu:clip-circle-full transition-[clip-path] duration-500 md:clip-circle-full md:relative md:grid-flow-col md:p-0 md:bg-transparent">

                        {
                            routes.map((route, i) => {
                                return (
                                    <li key={i}>
                                        <Link className="hover:bg-slate-500 hover:cursor-pointer transition duration-700 p-1 rounded-md" href={route.path}>{route.name}</Link>
                                    </li>
                                )
                            })
                        }

                    </ul>


                    <Link className=' bg-green-500 text-center w-[25%] p-2 font-bold rounded-full  sm:w-[20%] md:w-[15%] hover:bg-green-800 hover:cursor-pointer transition duration-700' href={"/user/?modal=true"}>
                        Add Movie
                    </Link>
                    <button className="bg-red-500 w-[25%] p-2 rounded-full  hover:bg-red-800 hover:cursor-pointer transition duration-700 md:w-[12%]">Logout</button>
                    <Image src={'/assets/images/cinema3.jpg'} width={40} height={40} className="hidden w-full rounded-full object-cover sm:hidden md:block md:w-[10%] md:h-[60%] md:rounded-full  " alt={"Movie Logo Img"} />



                </nav>



            </header>
        </>

    )
}

export default Navbar