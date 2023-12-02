import React, { useEffect, useState } from 'react';
import logo from '../../../public/logo/fl-logo.png';


const NavBar = () => {

    const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'system');

    const element = document.documentElement;
    const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
    // console.log(darkQuery, "darkQuery");

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
                <img className='h-[120px]' src={logo} alt="Flower-Store-Logo" />
            </div>
            <div className='flex justify-center items-center space-x-4 h-[90px] bg-indigo-200 my-3'>
                <p>Home</p>
                <p>Flowers</p>
                <p>Book a Flower</p>
                <p>About Us</p>
                <p>Contact Us</p>
                <p className='duration-100 dark:bg-slate-800 bg-gray-100 rounded'>
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
                </p>
            </div>
        </div>
    );
};

export default NavBar;