import React, { useEffect , useState } from 'react';

const ManageBookings = () => {
    const [bookings , setBookings] = useState([])
    useEffect( () =>{
        fetch('https://cryptic-bastion-60889.herokuapp.com/orders')
        .then(res => res.json())
        .then(data => setBookings(data))
    } ,[])
    return (
        <div>
           <h1 className='text-primary text-3xl  text-center'>All Bookings </h1>
           <div className='lg:grid md:grid lg:grid-cols-2 md:grid-cols-2'>
                {
                    bookings.map(booking =>
                    <div class="card card-compact w-76 bg-stone-800 shadow-xl md:m-10">
                    <figure><img src={booking.img}alt="property image" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">{booking.property}</h2>
                      <h3 className='text-xl text-primary'>${booking.price}</h3>
                      <h2 class="text-xl">{booking.propertyAddress}</h2>
                      <h2 class="text-xl">Booked by:-{booking.name}</h2>
                      <h3 className='text-xl'>Customer address:-{booking.address}</h3>
                      <h3 className='text-xl'>Customer phone:-{booking.phone}</h3>
                      <p>{booking.description}</p>
                    </div>
                  </div>)
                }
            </div>
        </div>
    );
};

export default ManageBookings;