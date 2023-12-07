import React from 'react';
import pageError from '../../../public/animations/404-error.json'
import Lottie from 'lottie-react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const PageNotFound = () => {
    return (
        <div>
            <div className='flex justify-center my-10'>
                <Lottie className='w-[700px] h-[400px]' animationData={pageError} loop={true} />
            </div>
            <div className='my-10 flex justify-center'>
                <button className='border-x-4 hover:shadow-2xl hover:shadow-red-400 border-indigo-500 px-7 py-4 text-lg font-bold text-white rounded-tr-3xl rounded-bl-3xl rounded-tl rounded-br bg-gradient-to-r from-slate-600 via-purple-600 to-slate-600'><Link to='/' className='flex items-center space-x-3'><FaHome className='text-xl mr-2' /> Home</Link></button>
            </div>
        </div>
    );
};

export default PageNotFound;