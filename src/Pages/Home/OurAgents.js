import React from 'react';

const OurAgents = () => {
    const agents = [
        {
            img:"https://tunatheme.com/tf/html/quarter-preview/quarter/img/team/5.jpg",
            job:"Real Estate Broker",
            name:"Rosalina D. william"
        },
        {
            img:"https://tunatheme.com/tf/html/quarter-preview/quarter/img/team/1.jpg",
            job:"Selling agent",
            name:"Kelian Anderson"
        },
        {
            img:"https://tunatheme.com/tf/html/quarter-preview/quarter/img/team/6.jpg",
            job:"Property Seller",
            name:"Miranda H. Halimr"
        },
        {
            img:"https://tunatheme.com/tf/html/quarter-preview/quarter/img/team/4.jpg",
            job:"Real Estate Broker",
            name:"Damble D. Browni"
        },
        {
            img:"https://tunatheme.com/tf/html/quarter-preview/quarter/img/team/2.jpg",
            job:"Selling agent",
            name:"Aiden Benjamin"
        },
        {
            img:"https://tunatheme.com/tf/html/quarter-preview/quarter/img/team/3.jpg",
            job:"Property Seller",
            name:"James Carter"
        }
    ]
    return (
        <div>
            <h1 className='text-primary text-center m-5 text-5xl'>Our Agents</h1>
            <div className='lg:grid md:grid lg:grid-cols-3 md:grid-cols-2 lg:ml-20'>
                {
                    agents.map(agent =>
                        <div class="card w-96 shadow-xl">
                        <figure class="px-10 pt-10">
                          <img src={agent.img} alt="Shoes" class="rounded-xl" />
                        </figure>
                        <div class="card-body items-center text-center">
                          <h2 class="card-title text-primary">{agent.name}</h2>
                          <p>{agent.job}</p>
                        </div>
                      </div>
                        )
                }
            </div>
        </div>
    );
};

export default OurAgents;