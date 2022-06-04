import React from 'react';

const Benefit = () => {
    return (
        <div>
            <div class="hero min-h-screen bg-base-300">
           <div class="hero-content flex-col lg:flex-row-reverse">
             <img src="https://images.unsplash.com/photo-1503900311769-9f25e9f06068?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZHViYWklMjBuaWdodCUyMHZpZXd8ZW58MHx8MHx8&w=1000&q=80" class=" rounded-lg shadow-2xl lg:w-1/2"/>
             <div>
                 <p className='text-green-400'>Our Value</p>
               <h1 class="text-5xl font-bold">Value we give to you</h1>
               <p class="py-6">We always ready to help by providing best services for you.We believe a good place to live can make your life batter. we develop a reputation for trust and will have that reputation for years to come</p>
               <div className=''>
            <p className='flex flex-cols mb-10'><img src="https://i.pinimg.com/originals/c9/1a/5d/c91a5d56604305fdc6281e53bf964c4a.jpg" alt="" className='w-12 mr-2' /> No commision</p>
            <p className='flex flex-cols mb-10'><img src="https://thumbs.dreamstime.com/b/home-sign-icon-main-page-button-dark-background-home-sign-icon-main-page-button-dark-background-simple-vector-icon-116778508.jpg" alt=""  className='w-10 mr-5'/> Buy with Confidence</p>
            <p className='flex flex-cols'><img src="https://thumbs.dreamstime.com/b/safe-icon-vector-shield-dark-background-simple-116997101.jpg" alt="" className='w-10 mr-5' /> safe & trustworthy</p>
        </div>
             </div>
           </div>
         </div>
        </div>
    );
};

export default Benefit;