import React from 'react';
import { useLoaderData } from 'react-router-dom';
import FlowerCard from './FlowerCard';

const Flowers = () => {

    const flowers = useLoaderData();

    return (
        <div className='mt-56 pt-10'>
            <h1 className='text-2xl md:text-3xl font-bold text-center my-8'>Recent Added Flowers: {flowers.length}</h1>
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
        </div>
    );
};

export default Flowers;