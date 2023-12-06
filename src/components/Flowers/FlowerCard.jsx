import React from 'react';

const FlowerCard = ({ flower }) => {

    const { id, flowerName, flowerPhoto, flowerRating, flowerStatus } = flower;
    console.log(flower)
    return (
        <div>
            <div className='border p-3 rounded-xl shadow-2xl'>
                <img className='w-[400px] h-[300px] rounded-lg' src={flowerPhoto} alt={flowerName} />
                <h1 className='mt-3 text-2xl font-semibold'>Name: {flowerName}</h1>
                <p className='my-3 text-lg font-semibold'>Rating: {flowerRating}</p>
                <p className='text-lg font-semibold'>Status: {flowerStatus}</p>
            </div>
        </div>
    );
};

export default FlowerCard;