import React from 'react';
import img01 from '../../../public/images/for-home-01.jpg'
import img02 from '../../../public/images/for-home-03.jpg'
import img03 from '../../../public/images/for-home-02.jpg'
import img04 from '../../../public/images/iris-flower.jpg'
import img05 from '../../../public/images/jasmine-flower.jpg'
import img06 from '../../../public/images/peony-flower.jpg'
import { Link } from 'react-router-dom';

const DemoFlower = () => {
    return (
        <div className='mt-10'>
            <div className='flex justify-center'>
                <h1 className='text-3xl font-bold text-center my-5 bg-gradient-to-r from-rose-600 via-purple-700 to-rose-600 inline-block text-transparent bg-clip-text'>Blossom Every Moment: Your Floral Haven!</h1>
            </div>
            <p className='text-yellow-600 text-lg font-medium text-center mb-3'>-- Here is some Demo --</p>
            <div className='flex justify-center'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    {/* Image One */}
                    <div className='shadow-2xl rounded-3xl hover:shadow-blue-400 transition-transform hover:scale-105 duration-500'>
                        <img className='w-[300px] h-[200px] md:w-[400px] md:h-[300px] rounded-3xl' src={img01} alt="First Image" />
                    </div>
                    {/* Image Two */}
                    <div className='shadow-2xl rounded-3xl hover:shadow-blue-400 transition-transform hover:scale-105 duration-500'>
                        <img className='w-[300px] h-[200px] md:w-[400px] md:h-[300px] rounded-3xl' src={img02} alt="Second Image" />
                    </div>
                    {/* Image Three */}
                    <div className='shadow-2xl rounded-3xl hover:shadow-blue-400 transition-transform hover:scale-105 duration-500'>
                        <img className='w-[300px] h-[200px] md:w-[400px] md:h-[300px] rounded-3xl' src={img03} alt="Third Image" />
                    </div>
                    {/* Image Four */}
                    <div className='shadow-2xl rounded-3xl hover:shadow-blue-400 transition-transform hover:scale-105 duration-500'>
                        <img className='w-[300px] h-[200px] md:w-[400px] md:h-[300px] rounded-3xl' src={img04} alt="Third Image" />
                    </div>
                    {/* Image Five */}
                    <div className='shadow-2xl rounded-3xl hover:shadow-blue-400 transition-transform hover:scale-105 duration-500'>
                        <img className='w-[300px] h-[200px] md:w-[400px] md:h-[300px] rounded-3xl' src={img05} alt="Third Image" />
                    </div>
                    {/* Image Six */}
                    <div className='shadow-2xl rounded-3xl hover:shadow-blue-400 transition-transform hover:scale-105 duration-500'>
                        <img className='w-[300px] h-[200px] md:w-[400px] md:h-[300px] rounded-3xl' src={img06} alt="Third Image" />
                    </div>
                </div>
            </div>
            <div className='my-10 flex justify-center'>
                <button className='border-x-4 hover:shadow-2xl hover:shadow-red-400 border-indigo-500 px-7 py-4 text-lg font-bold text-white rounded-tr-3xl rounded-bl-3xl rounded-tl rounded-br bg-gradient-to-r from-slate-600 via-purple-600 to-slate-600'><Link to='flowers'>Show More</Link></button>
            </div>
        </div>
    );
};

export default DemoFlower;