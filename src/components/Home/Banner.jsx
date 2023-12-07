import React from 'react';
import flowerAnimation from '../../../public/animations/flower-animation.json'
import Lottie from 'lottie-react';

const Banner = () => {
    return (
        <div className='my-10'>
            <div className='flex flex-col justify-center lg:flex-row lg:justify-evenly items-center'>
                <div data-aos="fade-right"
                    data-aos-duration="1000"
                    className='w-[300px] md:w-[500px] lg:w-[500px]'>
                    <h1 data-aos="fade-down"
                        data-aos-duration="1000" className='text-2xl md:text-4xl text-center lg:text-start font-bold'>Welcome to the <br /> Flower Store 🎴</h1>
                    <p data-aos="fade-right"
                        data-aos-duration="1000" className='text-lg text-center lg:text-start my-5'>
                        Where beauty blossoms and nature's wonders come to life! Our React application is a charming online flower shop that brings the joy of flowers right to your fingertips. Whether you're looking to brighten someone's day with a thoughtful bouquet or add a touch of elegance to your space, the Flower Store has you covered. With a user-friendly interface, stunning visuals, and seamless navigation, our application provides a delightful shopping experience for flower enthusiasts.
                    </p>
                    <div className='flex justify-center lg:justify-start items-center'>
                        <p className='flex cursor-pointer text-black text-base md:text-[18px] shadow-2xl font-medium justify-center px-5 py-3 w-[150px] rounded-b-3xl rounded-l-full border-x-4 border-blue-600 bg-sky-500 hover:bg-gradient-to-r from-violet-500 hover:shadow-rose-600 to-sky-500 hover:text-white hover:-translate-y-1 transform duration-500'>Learn More</p>

                        <p className='flex cursor-pointer text-white border-x-4 border-indigo-600 text-base md:text-[18px] shadow-2xl font-medium justify-center ml-5 px-5 py-3 w-[150px] rounded-b-3xl rounded-r-full bg-gradient-to-r from-sky-500 to-violet-500 hover:shadow-rose-600 hover:-translate-y-1 transform duration-500'>Discover</p>
                    </div>
                </div>
                <div data-aos="zoom-in-up" data-aos-duration="1000" className='w-[280px] md:w-[400px] lg:w-[400px]'>
                    <Lottie animationData={flowerAnimation} loop={true} />
                </div>
            </div>
        </div >
    );
};

export default Banner;