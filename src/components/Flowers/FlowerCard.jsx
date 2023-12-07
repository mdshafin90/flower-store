import React from 'react';
import { FaHandPointRight } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FlowerCard = ({ flower }) => {

    const { id, flowerName, flowerPhoto, flowerRating, flowerStatus } = flower;

    const handleClick = () => {
        toast.warn('This is just for demo', {
            position: "top-right",
            autoClose: 2000,
            theme: "dark",
        });
    };

    return (
        <div>
            <div className='border-y-4 border-purple-600 rounded-3xl p-3 shadow-2xl hover:shadow-blue-400 transition-transform hover:scale-105 duration-500'>
                <img className='w-[300px] h-[200px] md:w-[400px] md:h-[300px] rounded-3xl mx-auto' src={flowerPhoto} alt={flowerName} />
                <div className='flex items-center justify-evenly md:justify-between'>
                    <div>
                        <h1 className='mt-3 text-2xl font-semibold'>Name: {flowerName}</h1>
                        <p className='my-3 text-lg font-semibold'>Rating: {flowerRating}</p>
                        <p className='text-lg font-semibold'>Status: {flowerStatus}</p>
                    </div>
                    <div>
                        <div onClick={handleClick} className='tooltip tooltip-accent tooltip-left' data-tip="Details">
                            <FaHandPointRight className='text-5xl text-indigo-500 cursor-pointer mr-0 md:mr-8' />
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default FlowerCard;