import React from 'react';
import './Banner.css'
const Banner = () => {
    return (
<div class="hero min-h-screen bg-base-200">
  <div class="hero-content flex-col lg:flex-row">
    <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" class=" rounded-lg shadow-2xl lg:w-1/2 border-8 border-stone-700" />
    <div>
      <h1 class="text-5xl font-bold">Discover the ideal property here</h1>
      <p class="py-6">Find a variety of properties that suits you very easily. Forget all difficulties in finding a residence for you.</p>
      <div className='lg:flex lg:flex-cols'>
      <div className=" lg:m-10 ">
      <h1 className='text-3xl text-green-500 text-left'>1.5k+</h1>
      <p className='text-left text-2xl'>Properties</p>
      </div>
      <div className=" lg:m-10">
      <h1 className='text-3xl text-green-500 text-left'>2k+</h1>
      <p className='text-left text-2xl'>Happy Customer</p>
      </div>
      <div className=" lg:m-10">
      <h1 className='text-3xl text-green-500 text-left'>280+</h1>
      <p className='text-left text-2xl'>Reviews</p>
      </div>
      </div>
    </div>
  </div>
</div>
    );
};

export default Banner;