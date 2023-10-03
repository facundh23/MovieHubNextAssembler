'use client';
import { useTheme } from 'next-themes'
import { BsFillSunFill } from "react-icons/bs";
import { BsFillMoonFill } from "react-icons/bs";
const ThemeBtn = () => {
    const { resolvedTheme, theme, setTheme } = useTheme()

    return (
        <div className='flex items-end justify-end mt-2'>
            <button className='mt-5' onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}>
                {
                    resolvedTheme === "undefined" ? (<BsFillSunFill />) : (<BsFillMoonFill />)
                }
            </button>

        </div>
    )
}

export default ThemeBtn