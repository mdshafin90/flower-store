import React from 'react';
import { useLoaderData } from 'react-router-dom';
import FlowerCard from './FlowerCard';

const Flowers = () => {

    const flowers = useLoaderData();

    return (
        <div className='my-5'>
            <h1 className='text-3xl font-bold text-center my-8'>Recent Added Flowers: {flowers.length}</h1>
            <div className='flex justify-center'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    {
                        flowers.map(flower => <FlowerCard
                            key={flower.id}
                            flower={flower}
                        ></FlowerCard>)
                    }
                </div>
            </div>
            <div className='my-10 flex justify-center'>
                <button className='border-x-4 border-indigo-500 px-7 py-4 text-lg font-bold text-white rounded-tr-3xl rounded-bl-3xl rounded-tl rounded-br bg-gradient-to-r from-slate-600 via-purple-600 to-slate-600'>Show More</button>
            </div>
        </div>
    );
};

export default Flowers;