"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

export default function ThemeToggle(){
    const [isDark, setDark] = useState(false)

    useEffect(() =>{
        const savedTheme = localStorage.getItem('theme')

        if(
            savedTheme === 'dark' ||
            (!savedTheme && window.matchMedia('(prefers-color-scheme:dark)').matches)
        ){
            document.documentElement.classList.add('dark')
            setDark(true)
        }else{
            document.documentElement.classList.remove('dark')
            setDark(false)
        }
    }, [])

    const toggleTheme = () => {
        const newTheme = isDark? 'light' :'dark'
        if (newTheme === 'dark') {
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme','dark')
        }else{
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme','light')
        }
        setDark(!isDark)
    }

    return(
        <button onClick={toggleTheme}>
            {isDark ? <Image src='/darkmode.png' alt="gato" width={50} height={50}/> : <Image src='/lightmode.png' alt="gato" width={50} height={50}/>}
        </button>
    )
}