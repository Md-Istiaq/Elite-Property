import React,{useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
const AllProperties = () => {
    const [properties,setproperties] = useState([])
    const Navigate = useNavigate()
    useEffect( () =>{
        fetch('http://localhost:5000/properties')
        .then(res => res.json())
        .then(data => setproperties(data))
    } ,[])
    const Details = id =>{
      Navigate(`/properties/${id}`)
    }
    return (
        <div>
           <h1 className='text-primary text-3xl font-bold text-center'>Our Residence</h1>
           <div className='lg:grid md:grid lg:grid-cols-3 md:grid-cols-2'>
                {
                    properties.map(property =>
                    <div class="card card-compact w-96 bg-stone-800 shadow-xl lg:m-10 md:m-10">
                    <figure><img src={property.img}alt="Shoes" /></figure>
                    <div class="card-body">
                      <h2 class="card-title">{property.name}</h2>
                      <h3 className='text-xl text-primary'>${property.price}</h3>
                      <h3 className='text-xl'>{property.address}</h3>
                      <p>{property.description}</p>
                      <div class="card-actions justify-end">
                        <button onClick={() => Details(property._id)} class="btn btn-primary">Book Now</button>
                      </div>
                    </div>
                  </div>)
                }
            </div>
        </div>
    );
};

export default AllProperties;