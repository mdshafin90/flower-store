import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';

const Main = () => {
    return (
        <div className='dark:text-gray-100 dark:bg-slate-900 duration-100'>
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;