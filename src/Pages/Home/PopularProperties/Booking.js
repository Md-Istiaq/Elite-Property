import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import {useAuthState} from 'react-firebase-hooks/auth'
import { toast } from 'react-toastify';
import auth from '../../../_firebase.init';
const Booking = () => {
    const {id} = useParams()
    const [property,setProperty] = useState([])
    const [propertyName , setPropertyName] = useState('')
    const [price , setPrice] = useState(0)
    const [user] = useAuthState(auth)
    const { register, handleSubmit ,formState: { errors }} = useForm({});
    useEffect( () =>{
        fetch(`http://localhost:5000/property/${id}`)
        .then(res => res.json())
        .then(data => {
            setProperty(data)
            setPrice(data.price)
            setPropertyName(data.name)
        })
    } ,[])
    const onSubmit = data =>{
        const newData = {
            name:data.name,
            email:data.email,
            address:data.address,
            phone:data.phone,
            price:price,
            property:propertyName,
            img:property.img,
            propertyAddress:property.address
        }
        const url = `http://localhost:5000/orders`
        fetch(url ,{
          method:'POST',
          headers:{
              'content-type':'application/json'
          },
          body:JSON.stringify(newData)
      })
      .then(res => res.json())
      .then(result =>{
          console.log(result)
          toast.success("Successfully Booked")
      })
    }
    return (
        <div>
           <div class="hero min-h-screen bg-base-200">
             <div class="hero-content flex-col lg:flex-row-reverse">
               <img src={property.img} class="rounded-lg lg:w-1/2" />
               <div>
                 <h1 class="text-5xl font-bold mb-1">{property.name}</h1>
                 <h1 class="text-3xl text-green-400 mb-1">$ {property.price}</h1>
                 <h1 class="text-xl mb-1">{property.address}</h1>
                 <p class="py-6 mb-1 text-xl">{property.description}</p>
               </div>
             </div>
           </div>
           <div class="hero min-h-screen bg-base-200">
           <div class="hero-content flex-col lg:flex-row-reverse">
           <img src="https://cdni.iconscout.com/illustration/premium/thumb/online-property-booking-5329650-4470678.png" alt="" srcset="" />
           <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
             <form onSubmit={handleSubmit(onSubmit)} class="card-body">
               <div class="form-control">
                 <label class="label">
                   <span class="label-text">Name</span>
                 </label>
                 <input type="text" value={user.displayName} placeholder="name" class="input input-bordered" {...register("name")} disable />
               </div>
               <div class="form-control">
                 <label class="label">
                   <span class="label-text">E-mail</span>
                 </label>
                 <input type="text" value={user.email} placeholder="e-mail" class="input input-bordered" {...register("email")} disable />
               </div>
               <div class="form-control">
                 <label class="label">
                   <span class="label-text">Property Name</span>
                 </label>
                 <input type="text" value={property.name} placeholder="property" class="input input-bordered" {...register("property")} disable />
               </div>
               <div class="form-control">
                 <label class="label">
                   <span class="label-text">Property Price</span>
                 </label>
                 <input type="text" value={property.price} placeholder="price" class="input input-bordered" {...register("price")} disable/>
               </div>
               <div class="form-control">
                 <label class="label">
                   <span class="label-text">Phone</span>
                 </label>
                 <input type="text" placeholder="phone" class="input input-bordered" {...register("phone", { required: true })} />
               </div>
               <div class="form-control">
                 <label class="label">
                   <span class="label-text">your address</span>
                 </label>
                 <input type="text" placeholder=" your address" class="input input-bordered" {...register("address", { required: true })} />
               </div>
               <div class="form-control mt-6">
                 <input type="submit" value="Book now" className='btn btn-primary' />
               </div>
             </form>
           </div>
         </div>
        </div>
        </div>
    );
};

export default Booking;