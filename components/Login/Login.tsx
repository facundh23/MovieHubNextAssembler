

type Props = {}

const Login = (props: Props) => {
    return (
        <main className=" h-screen">
            <div className='hero-body h-screen flex items-center flex-col justify-between bg-cupon-img bg-[length:100%_100%] object-center'>
                <h1 className='hero-title text-6xl mt-10 text-black font-bold'>Movie Hub Blog</h1>
                <p className='leading-relaxed text-4xl mb-6 text-black font-bold  text-center'> Hello! This is your web application to save your favorite movies and always have them with you in case you want to watch them again at any time.</p>
                <a href={"/api/auth/login"} className='bg-green-400 hover:cursor-pointer p-6 w-[100%] text-2xl font-bold text-center hover:bg-green-800 transition duration-700'>Login</a>
            </div>


        </main>
    )
}

export default Login