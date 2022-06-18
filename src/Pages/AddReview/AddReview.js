import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
const AddReview = () => {
    const { register, handleSubmit ,formState: { errors }} = useForm();
    const onSubmit = data => {
        const url = 'https://cryptic-bastion-60889.herokuapp.com/review'
        fetch(url ,{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result =>{
            console.log(result)
            toast.success("Review added")
        })
        console.log(data)
    }
    return (
<div class="hero min-h-screen bg-base-200">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <div class="text-center lg:text-left w-1/2 sm:text-start">
      <h1 class="text-5xl font-bold text-primary">Tell us about your Experiences with us.</h1>
      <p class="py-6">please give all the information and write your review so that we can reach more people. and your review will be shown in home page . you can check from there</p>
    </div>
    <form onSubmit={handleSubmit(onSubmit)} class="shadow-2xl border border-green-400 rounded-xl lg:w-1/2">
    <h1 className='text-3xl mx-auto text-primary text-center m-10'>Add your review</h1>
      <div class="card-body">
        <div class="form-control">
          <label class="label">
            <span class="label-text ">Name</span>
          </label>
          <input type="text" placeholder="name" class="input input-bordered border-green-400 login-from" {...register("name")}  />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text ">Image url</span>
          </label>
          <input type="text" placeholder="image url" class="input input-bordered border-green-400 login-from" {...register("img")}  />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text ">Review</span>
          </label>
          <textarea type="text" placeholder="review" class="input input-bordered border-green-400 login-from" {...register("review")}  />
        </div>
        <input type="submit" value="Add review" class="btn btn-primary mt-5 mb-5" />
      </div>
      </form>
  </div>
</div>
    );
};

export default AddReview;