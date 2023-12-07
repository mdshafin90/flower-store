import React from 'react';
import ukGarden from '../../../public/images/UK-garden.jpg'
import usaGarden from '../../../public/images/USA-garden.jpeg'
import uaeGarden from '../../../public/images/UAE-garden.jpg'

const AboutUs = () => {
    return (
        <div className='mt-56 pt-10'>
            <div className='flex justify-center my-5'>
                <h1 className='font-bold text-5xl bg-gradient-to-r from-rose-600 via-purple-500 to-rose-400 inline-block text-transparent bg-clip-text'>About Us</h1>
            </div>
            <div className='flex justify-center mb-5'>
                <h1 className='font-bold text-base md:text-2xl bg-gradient-to-r text-center from-green-600 via-pink-500 to-yellow-600 inline-block text-transparent bg-clip-text'>Where Flowers Tell Stories & <br /> Smiles Bloom.</h1>
            </div>
            {/* first */}
            <div className='flex justify-center'>
                <div className='flex flex-col items-center justify-center md:flex-row md:items-center md:justify-between lg:flex-row lg:items-center lg:justify-between space-x-0 md:space-x-8 lg:space-x-20 px-2 md:px-4'>
                    <img className='w-[280px] h-[200px] md:w-[400px] md:h-[300px] lg:w-[600px] lg:h-[500px] rounded-2xl' src={ukGarden} alt="UK Garden" />
                    <div className='w-[300px] md:w-[400px] lg:w-[600px] justify-center'>
                        <h1 className='text-2xl font-bold my-2 md:my-0 lg:my-0 text-rose-600 text-center md:text-start lg:text-start'>Rooted in Passion</h1>
                        <p className='text-xl my-3 md:my-4 lg:my-5 text-center md:text-start lg:text-start'>Welcome to our <span className='text-xl md:text-2xl font-semibold cursor-pointer text-indigo-500 underline'>UK Garden</span> where our love for flowers goes beyond aesthetics. Our journey is rooted in passion, cultivating a space where every bloom tells a story and every arrangement is a masterpiece.</p>
                        <div className='flex justify-center md:justify-start lg:justify-start'>
                            <button className='px-8 py-2 text-lg font-semibold rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-2xl hover:shadow-blue-400 transition-transform hover:scale-105 duration-500'>Visit</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* second */}
            <div className='flex justify-center my-5'>
                <div className='flex flex-col items-center justify-center md:flex-row-reverse md:items-center md:justify-between lg:flex-row-reverse lg:items-center lg:justify-between space-x-0 md:space-x-8 lg:space-x-20 px-2 md:px-4'>
                    <img className='w-[280px] h-[200px] md:w-[400px] md:h-[300px] lg:w-[600px] lg:h-[500px] rounded-2xl' src={usaGarden} alt="UK Garden" />
                    <div className='w-[300px] md:w-[400px] lg:w-[600px] justify-center'>
                        <h1 className='text-2xl font-bold my-2 md:my-0 lg:my-0 text-rose-600 text-center md:text-start lg:text-start'>Blossoming with Purpose</h1>
                        <p className='text-xl my-3 md:my-4 lg:my-5 text-center md:text-start lg:text-start'>At <span className='text-xl md:text-2xl font-semibold cursor-pointer text-indigo-500 underline'>USA Garden</span> we believe in more than just selling flowers – we're on a mission to spread joy and create meaningful moments. Our floral creations are crafted with purpose, designed to evoke emotions and celebrate life's special occasions.</p>
                        <div className='flex justify-center md:justify-start lg:justify-start'>
                            <button className='px-8 py-2 text-lg font-semibold rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-2xl hover:shadow-blue-400 transition-transform hover:scale-105 duration-500'>Visit</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* third */}
            <div className='flex justify-center my-5'>
                <div className='flex flex-col items-center justify-center md:flex-row md:items-center md:justify-between lg:flex-row lg:items-center lg:justify-between space-x-0 md:space-x-8 lg:space-x-20 px-2 md:px-4'>
                    <img className='w-[280px] h-[200px] md:w-[400px] md:h-[300px] lg:w-[600px] lg:h-[500px] rounded-2xl' src={uaeGarden} alt="UK Garden" />
                    <div className='w-[300px] md:w-[400px] lg:w-[600px] justify-center'>
                        <h1 className='text-2xl font-bold my-2 md:my-0 lg:my-0 text-rose-600 text-center md:text-start lg:text-start'>Your Floral Destination</h1>
                        <p className='text-xl my-3 md:my-4 lg:my-5 text-center md:text-start lg:text-start'>Welcome to <span className='text-xl md:text-2xl font-semibold cursor-pointer text-indigo-500 underline'>UAE Garden</span> your ultimate floral destination. Here, we celebrate nature's wonders and share in the joy of creating moments that are as unique as each petal in our arrangements.</p>
                        <div className='flex justify-center md:justify-start lg:justify-start'>
                            <button className='px-8 py-2 text-lg font-semibold rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-2xl hover:shadow-blue-400 transition-transform hover:scale-105 duration-500'>Visit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;