import React from 'react';

const CoreServices = () => {
    const Services = [
        {
            img:"https://cdn0.iconfinder.com/data/icons/business-finance-vol-1-59/512/z6-finance_safe_insurance_secure-128.png",
            name:"Property Management",
            details:"over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home."
        },
        {
            img:"https://cdn4.iconfinder.com/data/icons/banking-service-6/512/11_loan_fixed_business_interest_money_mortgage_rate-128.png",
            name:"Mortgage Service",
            details:"A mortgage is a loan – provided by a mortgage lender While it’s possible to take out loans to cover the entire cost of a home."
        },
        {
            img:"https://cdn-icons-png.flaticon.com/512/490/490283.png",
            name:"Consulting Services",
            details:"A customer have many kind of question about real state when they are into purchasing it. we are always ready to give the answer to our customer to their"
        },
        {
            img:"https://cdn3.iconfinder.com/data/icons/real-estate-line-color-property-evaluation/512/Property_deal-256.png",
            name:"Home buying",
            details:"As a real state company we always buy property.this is our job.any owner can come to us if he want's to sell his property"
        },
        {
            img:"https://cdn4.iconfinder.com/data/icons/unemployment-2/512/SellProperty-home-forsale-property-building-realestate-house-selling-sale-128.png",
            name:"Home selling",
            details:"Available property for sell is listed on our website for sell.Costumer is available to buy any property he like from us."
        },
        {
            img:"https://cdn3.iconfinder.com/data/icons/rental-property-filloutline/64/ESCROW_ACCOUNT-contract-real_estate-housing-loan-128.png",
            name:"Escrow Services",
            details:"The buyers send the money to an escrow service, such as escrow.com, and they hold the money until the product is received."
        },
    ]
    return (
        <div>
            <h1 className='text-primary text-center text-3xl'>Our Core Services</h1>
            <div className='lg:grid md:grid lg:grid-cols-3 md:grid-cols-2 lg:ml-20'>
                {
                    Services.map(service => 
                        <div class="card w-96 shadow-xl">
                        <figure class="px-10 pt-10">
                          <img src={service.img}alt="Shoes" class="rounded-xl w-32" />
                        </figure>
                        <div class="card-body items-center text-center">
                          <h2 class="card-title">{service.name}</h2>
                          <p>{service.details}</p>
                        </div>
                      </div>
                        )
                }
            </div>
        </div>
    );
};

export default CoreServices;