import React, { useEffect } from 'react'
import assets from '../assets/assets'

const Themetogglebutton = ({theme , setTheme}) => {


    useEffect(()=>{
        const prefersDarkMode = window.matchMedia('(prefersDarkMode: dark)').matches
        setTheme(theme || (prefersDarkMode ? 'dark' : 'light'))
    },[])

    useEffect(()=>{
        if(theme === 'dark'){
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
        localStorage.setItem('theme',theme)
    },[theme])

return (
    <>
        <button className='cursor-pointer'>
            {theme === 'dark' ? (
                <img onClick={()=> setTheme('light')} src={assets.sun_icon} alt="" className='size-8.5 px-1.5 border border-gray-500 rounded-full' />
            ) : (
                <img onClick={()=> setTheme('dark')} src={assets.moon_icon} alt='' className='size-8.5 px-1.5 border border-gray-500 rounded-full'></img>
            )}
        </button>
    </>
)
}

export default Themetogglebutton