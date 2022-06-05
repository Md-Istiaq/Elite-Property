import React from 'react';
import Banner from './Banner/Banner';
import Benefit from './Benefit';
import FAQ from './FAQ';
import OurServices from './OurServices';
import PopularProperties from './PopularProperties/PopularProperties';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularProperties></PopularProperties>
            <OurServices></OurServices>
            <Benefit></Benefit>
            <FAQ></FAQ>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;