import React, { useEffect , useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../_firebase.init'
import {toast} from 'react-toastify'
const MyOrder = () => {
    const [user] = useAuthState(auth)
    const [orders , setOrders] = useState([])
    const email = user.email
    useEffect( () =>{
        fetch(`https://cryptic-bastion-60889.herokuapp.com/orders/${email}`)
        .then(res => res.json())
        .then(data => setOrders(data))

    } ,[])
    const Delete = id =>{
        const proceed = window.confirm("are you sure you want to delete??")
        if(proceed){
          const url = `https://cryptic-bastion-60889.herokuapp.com/order/${id}`
          fetch(url,{
            method:'DELETE'
          })
          .then(res => res.json())
          .then(data => {
            toast.error("Booking Canceled")
          })
  
        }
    }
    return (
        <div>
            <h1 className='text-3xl text-primary text-center m-10'>You have {orders.length} bookings </h1>
            <div className='lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 lg:ml-20 mb-10'>
            {
                orders.map(order =>
                <div class="card w-96 bg-stone-800 shadow-xl border-2 border-green-400 mb-5">
                  <div class="card-body">
                    <h2 class="card-title">{order.property}</h2>
                    <p className="text-xl text-primary">$ {order.price}</p>
                    <p className="text-xl">{order.propertyAddress}</p>
                    <p className="text-xl">Booked by:- {order.name}</p>
                    <div class="card-actions justify-end">
                        <button onClick={() => Delete(order._id)} class="btn btn-primary">Delete</button>
                      </div>
                  </div>
                  <figure><img src={order.img}alt="Shoes" /></figure>
                </div>
                    )
            }
            </div>
        </div>
    );
};

export default MyOrder;