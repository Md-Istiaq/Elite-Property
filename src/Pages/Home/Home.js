import React from 'react';
import Banner from './Banner/Banner';
import Benefit from './Benefit';
import ContactFrom from './ContactFrom';
import ContactUs from './ContactUs';
import CoreServices from './CoreServices';
import FAQ from './FAQ';
import Footer from './Footer/Footer';
import OurAgents from './OurAgents';
import OurServices from './OurServices';
import PopularProperties from './PopularProperties/PopularProperties';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div className='bg-black'>
            <Banner></Banner>
            <PopularProperties></PopularProperties>
            <OurServices></OurServices>
            <CoreServices></CoreServices>
            <Benefit></Benefit>
            <OurAgents></OurAgents>
            <ContactUs></ContactUs>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;