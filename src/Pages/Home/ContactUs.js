import React from 'react';

const ContactUs = () => {
    return (
        <div >
            <h1 className='text-5xl text-primary text-center m-5'>Contact us</h1>
            <div className='lg:grid md:grid lg:grid-cols-3 md:grid-cols-2 lg:ml-20 mb-10'>
            <div class="card w-96 shadow-xl">
                <figure class="px-10 pt-10">
                  <img src="https://cdn2.iconfinder.com/data/icons/basic-flat-icon-set/128/letter-128.png" alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                  <h2 class="card-title text-primary">Email Address</h2>
                  <p>info@webmail.com</p>
                </div>
              </div>
            <div class="card w-96 shadow-xl ">
                <figure class="px-10 pt-10">
                  <img src="https://cdn3.iconfinder.com/data/icons/webina-seo-development-and-marketing/128/seo_web_3-12-128.png" alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                  <h2 class="card-title text-primary">Phone Number</h2>
                  <p>+0123-456789</p>
                  <p>+987-6543210</p>
                </div>
              </div>
            <div class="card w-96 shadow-xl">
                <figure class="px-10 pt-10">
                  <img src="https://cdn2.iconfinder.com/data/icons/office-highlight/128/location-office-address-pin-128.png" alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                  <h2 class="card-title text-primary">Office Address</h2>
                  <p>18/A, New Born Town Hall New York, US</p>
                </div>
              </div>
            </div>
        </div>
    );
};

export default ContactUs;