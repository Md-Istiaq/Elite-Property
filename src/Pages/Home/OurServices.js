import React from 'react';

const OurServices = () => {
    return (
        <div>
        <h1 className='text-primary text-5xl text-center'>Our services</h1>
        <div class="card lg:card-side bg-base-100 shadow-xl m-10">
        <figure><img src="https://pediaa.com/wp-content/uploads/2020/08/Difference-Between-Property-and-Real-Estate_1-1024x660.jpg" alt="Album"/></figure>
        <div class="card-body bg-black">
        <h2 class="card-title text-3xl">We make your comfort our top priority</h2>
        <p>In a free hour,when our power of choice is untrammelled and when nothing prevents our being able to do what we like best.<br/>
        <div className='grid grid-cols-2 mt-10 '>
            <p className='flex flex-cols mb-10'><img src="https://cdn1.iconfinder.com/data/icons/xmas/64/Layer_12-128.png" alt="" className='w-6 h-6' /> Best Market</p>
            <p className='flex flex-cols mb-10'><img src="https://cdn1.iconfinder.com/data/icons/xmas/64/Layer_12-128.png" alt="" className='w-6 h-6' /> Stable price</p>
            <p className='flex flex-cols'><img src="https://cdn1.iconfinder.com/data/icons/xmas/64/Layer_12-128.png" alt="" className='w-6 h-6' /> Top sell</p>
            <p className='flex flex-cols'><img src="https://cdn1.iconfinder.com/data/icons/xmas/64/Layer_12-128.png" alt="" className='w-6 h-6' /> Security of data</p>
        </div></p>
          </div>
         </div>
        </div>
    );
};

export default OurServices;