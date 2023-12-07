import React, { useEffect, useState } from 'react';
import logo from '../../../public/logo/fl-logo.png';
import { Link } from 'react-router-dom';


const NavBar = () => {

    const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'system');
    const [open, setOpen] = useState(false);

    const element = document.documentElement;
    const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
    // console.log(darkQuery, "darkQuery");

    let navLinks = [
        { name: "Home", link: "/" },
        { name: "Flower House", link: "/" },
        { name: "Blog's", link: "/" },
        { name: "About Us", link: "/" },
        { name: "Contact Us", link: "/" },
    ];

    const options = [
        {
            icon: "sunny",
            text: "light"
        },
        {
            icon: "moon",
            text: "dark",
        },
        {
            icon: "desktop-outline",
            text: "system"
        }
    ];

    function onWindowMatch() {
        if (localStorage.theme === 'dark' || (!("theme" in localStorage) && darkQuery.matches)) {
            element.classList.add('dark')
        }
        else {
            element.classList.remove('dark');
        }
    };
    onWindowMatch();

    // use case of switch
    useEffect(() => {
        switch (theme) {
            case 'dark':
                element.classList.add('dark');
                localStorage.setItem('theme', 'dark');
                break;
            case 'light':
                element.classList.remove('dark');
                localStorage.setItem('theme', 'light');
                break;
            default:
                localStorage.removeItem('theme');
                onWindowMatch()
                break;
        }
    }, [theme]);

    darkQuery.addEventListener('change', (e) => {
        if (!('theme' in localStorage)) {
            if (e.matches) {
                element.classList.add('dark');
            }
            else {
                element.classList.remove('dark');
            }
        }
    });

    return (
        <div>
            <div className='flex justify-center'>
                <Link to='/'>
                    <img className='h-[120px]' src={logo} alt="Flower-Store-Logo" />
                </Link>
            </div>
            <div className={`flex justify-between px-2 md:justify-center items-center space-x-5 ${open ? "h-[140px]" : "h-[90px]"} ${open ? "duration-500" : "duration-500"} ${theme === 'dark' ? "bg-slate-500" : "bg-indigo-200"}  my-3 overflow-hidden`}>

                <div onClick={() => setOpen(!open)} className='text-3xl text-start cursor-pointer md:hidden duration-300'>
                    <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                </div>

                <div className={`md:flex ${open ? 'flex flex-col md:flex-row space-y-1' : 'hidden'} md:justify-end`}>
                    <Link to='/'><p className={`md:ml-4 font-semibold ${theme === 'dark' ? "hover:text-blue-400" : "hover:text-purple-600"} hover:underline`}>Home</p></Link>
                    <Link to='/flowers'><p className={`md:ml-6 font-semibold ${theme === 'dark' ? "hover:text-blue-400" : "hover:text-purple-600"} hover:underline`}>Flowers</p></Link>
                    <Link><p className={`md:ml-6 font-semibold ${theme === 'dark' ? "hover:text-blue-400" : "hover:text-purple-600"} hover:underline`}>Book a Flower</p></Link>
                    <Link to='/about'><p className={`md:ml-6 font-semibold ${theme === 'dark' ? "hover:text-blue-400" : "hover:text-purple-600"} hover:underline`}>About Us</p></Link>
                    <Link to='/contact'><p className={`md:ml-6 font-semibold ${theme === 'dark' ? "hover:text-blue-400" : "hover:text-purple-600"} hover:underline`}>Contact Us</p></Link>
                </div>

                <div className='duration-100 dark:bg-slate-800 bg-gray-100 rounded'>
                    {
                        options?.map(opt => (
                            <button
                                key={opt.text}
                                onClick={() => setTheme(opt.text)}
                                className={`w-8 h-8 leading-9 text-xl rounded-full m-1 ${theme === opt.text && "text-sky-600"}`}>
                                <ion-icon name={opt.icon}></ion-icon>
                            </button>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}
export default NavBar;