
import Link from "next/link";
import Image from "next/image";
import { getSession } from "@auth0/nextjs-auth0";
import MoviesModal from "../Modal/Modal";




const routes = [

    {
        name: "Profile",
        path: "/user"
    },
    {
        name: "Movies",
        path: "/movies"
    },
    {
        name: "Add Movie",
        path: "/addMovie"
    },

]


type Props = {
    searchParams?: Record<string, string> | null | undefined,
}


const Navbar = async ({ searchParams }: Props) => {
    const showModal = searchParams?.modal;

    const session = await getSession()
    let user
    if (session) {
        user = session.user;
    }



    return (
        <>

            <header>
                <nav className=' w-[100%] flex font-bold justify-center items-center px-2 gap-5 h-28  bg-cyan-300 rounded-md md:justify-between sm:justify-between dark:bg-blue-800 '>



                    <input type="checkbox" id='menu' className='peer/menu hidden' />
                    <label htmlFor="menu" className=' ml-100 w-10 h-10 bg-open-menu bg-cover bg-center bg-red-500 z-20 cursor-pointer  rounded-lg peer-checked/menu:bg-close-menu transition-all md:hidden '></label>
                    <ul className="fixed inset-0 bg-menu-color px-[5%] grid gap-6 auto-rows-max content-center justify-items-center clip-circle-0 peer-checked/menu:clip-circle-full transition-[clip-path] duration-500 md:clip-circle-full md:relative md:grid-flow-col md:p-0 md:bg-transparent">

                        {
                            routes.map((route, i) => {
                                return (
                                    <li key={i}>
                                        <Link className="bg-green-400 p-2 hover:bg-slate-500 hover:cursor-pointer transition duration-700  rounded-md" href={route.path}>{route.name}</Link>
                                    </li>
                                )
                            })
                        }

                    </ul>
                    <a className="bg-red-400 p-2 rounded-md" href="/api/auth/logout">Logout</a>
                    <input type="text" placeholder="Search Your Movie" className="hidden md:block md:p-3 w-[30%]" />


                    {/* <button className="bg-red-500 w-[25%] p-2 rounded-full  hover:bg-red-800 hover:cursor-pointer transition duration-700 md:w-[12%]">Logout</button> */}
                    <Image src={user?.picture} width={100} height={40} className="hidden w-full rounded-full object-cover object-center sm:hidden md:block md:w-[10%] md:h-[60%] md:rounded-full  " alt={"Movie Logo Img"} />



                </nav>


                
            </header >
        </>

    )
}

export default Navbar