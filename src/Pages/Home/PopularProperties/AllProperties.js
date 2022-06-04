import React,{useState,useEffect} from 'react';

const AllProperties = () => {
    const [properties,setproperties] = useState([])
    useEffect( () =>{
        fetch('Properties.json')
        .then(res => res.json())
        .then(data => setproperties(data))
    } ,[])
    return (
        <div>
           <h1 className='text-green-400 text-3xl font-bold text-center'>Our Residence</h1>
           <div className='lg:grid md:grid lg:grid-cols-3 md:grid-cols-2'>
                {
                    properties.map(property =>
                    <div class="card card-compact w-96 bg-stone-800 shadow-xl lg:m-10 md:m-10">
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

export default AllProperties;