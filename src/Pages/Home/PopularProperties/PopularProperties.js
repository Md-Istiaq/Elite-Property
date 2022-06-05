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
            <h1 className='text-green-400 text-3xl font-bold m-10'>Featured Residence</h1>
            <Link to="/allproperties" className='m-10 hover:text-green-400'>See All Proprties →</Link>
            </div>
            <div className='lg:grid md:grid lg:grid-cols-3 md:grid-cols-2 ml-3 '>
                {
                    properties.slice(0,3).map(property =>
                    <div class="card card-compact w-96 bg-stone-800 shadow-xl lg:m-10 md:10 sm:mb-5">
                    <figure><img src={property.img}alt="Shoes" /></figure>
                    <div class="card-body">
                      <h2 class="card-title">{property.name}</h2>
                      <h3 className='text-xl text-green-400'>$ {property.price}</h3>
                      <h3 className='text-xl'>{property.description}</h3>
                      <p>{property.address}</p>
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