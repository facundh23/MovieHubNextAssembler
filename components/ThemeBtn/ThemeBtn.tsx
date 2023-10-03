'use client';
import { useTheme } from 'next-themes'

const ThemeBtn = () => {
    const { resolvedTheme, theme, setTheme } = useTheme()
    console.log(theme)
    return (
        <button onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}>
            {
                resolvedTheme === "undefined" ? "light" : "dark"
            }
        </button>
    )
}

export default ThemeBtn