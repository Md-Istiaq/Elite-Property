import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
const AddProperty = () => {
    const { register, handleSubmit ,formState: { errors }} = useForm();
    const onSubmit = data => {
        const url = 'http://localhost:5000/properties'
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
            toast.success("Property added")
        })
        console.log(data)
    }
    return (
        <div class="hero min-h-screen bg-black">
        <div class="hero-content flex-col lg:flex-col-reverse">
          <div class="text-center lg:text-left">
            <h1 class="text-2xl font-bold">Add Property</h1>
            <p class="py-6">Fill all the input filed in the above/below from to add Property. use a valid img url & check yhe url before giving.</p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} class="shadow-2xl w-full">
          <h1 className='text-3xl mx-auto text-primary text-center'>Add Property</h1>
            <div class="card-body">
              <div class="form-control">
                <label class="label">
                  <span class="label-text ">Property Name</span>
                </label>
                <input type="text" placeholder="name" class="input input-bordered border-primary" {...register("name")}  />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text ">Image url</span>
                </label>
                <input type="text" placeholder="image url" class="input input-bordered border-primary" {...register("img")}  />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text ">Price</span>
                </label>
                <input type="text"   placeholder="Price " class="input input-bordered border-primary " {...register("price")}  />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text ">Description</span>
                </label>
                <textarea type="text" placeholder="Description" class="input input-bordered border-primary" {...register("description")}  />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text ">Property location</span>
                </label>
                <textarea type="text" placeholder="location of the property" class="input input-bordered border-primary " {...register("address")}  />
              </div>
              <input type="submit" value="Add Property" class="btn btn-primary mt-5" />
            </div>
            </form>
        </div>
      </div>
    );
};

export default AddProperty;