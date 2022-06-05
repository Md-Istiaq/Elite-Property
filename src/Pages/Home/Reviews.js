import React ,{useState,useEffect} from 'react';
const Reviews = () => {
    const [reviews,setReviews] = useState([])
    useEffect( () =>{
        fetch('reviews.json')
        .then(res => res.json())
        .then(data => setReviews(data))
    } ,[])
    return (
        <div>
            <h1 className='text-3xl text-green-400 text-center mb-10'>what our customer's say</h1>
            <div className='lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 lg:ml-20 md:ml-10 mb-10'>
                {
                    reviews.map(review => 
                    <div class="card w-96 bg-base-100 border-8 border-green-400">
                      <figure class="px-10 pt-10">
                        <img src={review.img}alt="Shoes" class="rounded-xl" />
                      </figure>
                      <div class="card-body items-center text-center">
                        <h2 class="card-title">{review.name}</h2>
                        <p>{review.review}</p>
                      </div>
                    </div>
                  )
                }
            </div>
        </div>
    );
};

export default Reviews;