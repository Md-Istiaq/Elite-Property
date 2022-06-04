import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';

const PopularProperties = () => {
    const [properties,setproperties] = useState([])
    useEffect( () =>{
        fetch('Properties.json')
        .then(res => res.json())
        .then(data => setproperties(data))
    } ,[])
    return (
        <div>
            <div className='flex flex-cols justify-between align-center'>
            <h1 className='text-green-400 text-3xl font-bold m-10'>Our Popular Residence</h1>
            <Link to="/allproperties" className='m-10'>See All</Link>
            </div>
            <div className='lg:grid md:grid lg:grid-cols-3 md:grid-cols-2'>
                {
                    properties.slice(0,3).map(property =>
                    <div class="card card-compact w-96 bg-stone-800 shadow-xl m-10">
                    <figure><img src={property.img}alt="Shoes" /></figure>
                    <div class="card-body">
                      <h2 class="card-title">{property.name}</h2>
                      <h3 className='text-xl text-green-400'>${property.price}</h3>
                      <h3 className='text-xl'>{property.address}</h3>
                      <p>{property.description}</p>
                      <div class="card-actions justify-end">
                        <button class="btn btn-primary">Buy Now</button>
                      </div>
                    </div>
                  </div>)
                }
            </div>
        </div>
    );
};

export default PopularProperties;