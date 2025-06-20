import React from 'react';
import Banner from './Banner';
import HowWork from './HowWork';
import OurServices from './OurServices';
import ClientSlider from './ClientSlider';
import Benefit from './Benefit';

const Home = () => {
    return (
        <>
            <Banner />
        <HowWork/>    
            <OurServices />
            <ClientSlider />
            <Benefit/>
        </>
    );
};

export default Home;