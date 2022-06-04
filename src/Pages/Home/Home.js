import React from 'react';
import Banner from './Banner/Banner';
import OurServices from './OurServices';
import PopularProperties from './PopularProperties/PopularProperties';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularProperties></PopularProperties>
            <OurServices></OurServices>
        </div>
    );
};

export default Home;