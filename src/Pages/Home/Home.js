import React from 'react';
import Banner from './Banner/Banner';
import Benefit from './Benefit';
import OurServices from './OurServices';
import PopularProperties from './PopularProperties/PopularProperties';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularProperties></PopularProperties>
            <OurServices></OurServices>
            <Benefit></Benefit>
        </div>
    );
};

export default Home;