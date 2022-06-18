import React,{useState,useEffect} from 'react';
import { toast } from 'react-toastify';
const ManageProperty = () => {
    const [properties,setproperties] = useState([])
    useEffect( () =>{
        fetch('https://cryptic-bastion-60889.herokuapp.com/properties')
        .then(res => res.json())
        .then(data => setproperties(data))
    } ,[])
    const Delete = id =>{
        const proceed = window.confirm("are you sure you want to delete??")
        if(proceed){
          const url = `https://cryptic-bastion-60889.herokuapp.com/properties/${id}`
          fetch(url,{
            method:'DELETE'
          })
          .then(res => res.json())
          .then(data => {
            toast.error("Property Removed")
          })
  
        }
    }
    return (
        <div>
           <h1 className='text-primary text-3xl  text-center'>All Residence</h1>
           <div className='lg:grid md:grid lg:grid-cols-2 md:grid-cols-2'>
                {
                    properties.map(property =>
                    <div class="card card-compact w-76 bg-stone-800 shadow-xl md:m-10">
                    <figure><img src={property.img}alt="property image" /></figure>
                    <div class="card-body">
                      <h2 class="card-title">{property.name}</h2>
                      <h3 className='text-xl text-primary'>${property.price}</h3>
                      <h3 className='text-xl'>{property.address}</h3>
                      <p>{property.description}</p>
                      <div class="card-actions justify-end">
                        <button onClick={() => Delete(property._id)} class="btn btn-primary">Remove</button>
                      </div>
                    </div>
                  </div>)
                }
            </div>
        </div>
    );
};

export default ManageProperty;