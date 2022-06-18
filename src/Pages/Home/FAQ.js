import React from 'react';

const FAQ = () => {
    return (
        <div className='bg-stone-800 sm:h-[800px] lg:h-[400px] md:h-[400px] m-10'>
            <div className='mt-10 m-10 text-center '>
            <h1 className='text-3xl text-green-400 mb-10 text-center mt-10'>FAQ's- Frequently asked question</h1>
            <p>As you might imagine, real state agents field quite a few question everyday. People are naturally curious, and it's our job to guide</p>
            </div>
            <div className='lg:grid lg:grid-cols-3 md:grid md:grid-cols-2'>
            <div class="dropdown align-center sm:h-[50px]">
            <label tabindex="0" class="text-xl hover:text-green-400 border border-green-400 p-5  m-1 ml-10 rounded-xl">How can i build Equity in my house  ↓</label>
            <div tabindex="0" class="dropdown-content card card-compact w-64 p-2 shadow bg-primary text-primary-content">
            <div class="card-body">
            <p>You can build equity in three ways. First is from market appreciation.second when making your monthly mortgage payment, try to send a little bit more.</p>
            </div>
            </div>
            </div>
            <div class="dropdown align-center sm:m-30 ">
            <label tabindex="0" class="text-xl hover:text-green-400 border border-green-400 p-5  m-1 ml-10 rounded-xl">What's loan commitment letter? ↓</label>
            <div tabindex="0" class="dropdown-content card card-compact w-64 p-2 shadow bg-primary text-primary-content">
            <div class="card-body">
            <p>A loan commitment letter is given by the lender to the borrower stating the terms under which the lender has agreed to the loan. This is often considered “loan approval” which will allow the buyer to proceed with consummation of the real estate purchase.</p>
            </div>
            </div>
            </div>
            <div class="dropdown align-center sm:h-[50px]">
            <label tabindex="0" class="text-xl hover:text-green-400 border border-green-400 p-5  m-1 ml-10 rounded-xl">What dose DOM mean in the MLS? ↓</label>
            <div tabindex="0" class="dropdown-content card card-compact w-64 p-2 shadow bg-primary text-primary-content">
            <div class="card-body">
            <p>DOM stands for “Days on Market”. This number allows buyers to see how long the property has been for sale. Some people believe that the longer a property has been on the market, the more motivated a seller might be.</p>
            </div>
            </div>
            </div>
            </div>
        </div>
    );
};

export default FAQ;