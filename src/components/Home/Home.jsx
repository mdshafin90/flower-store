import React from 'react';
import Banner from './Banner';
import Flowers from '../Flowers/Flowers';
import FlowerCard from '../Flowers/FlowerCard';
import DemoFlower from './DemoFlower';
import Contact from '../Contact/Contact';
import AboutUs from '../AboutUs/AboutUs';


const Home = () => {
    return (
        <div>
            <div className='flex justify-center mt-60'>
                <h1 className='font-bold text-5xl animate-pulse bg-gradient-to-r from-rose-600 via-purple-500 to-rose-400 inline-block text-transparent bg-clip-text'>Flower Store</h1>
            </div>
            <Banner />
            <DemoFlower />
            <AboutUs />
            <Contact />
        </div>
    );
};

export default Home;