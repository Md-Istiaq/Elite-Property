import React from 'react';
const ContactFrom = () => {
    return (
<div class="card lg:card-side bg-base-100 mr-30">
  <figure><img src="https://www.chiangraitimes.com/wp-content/uploads/2021/08/The-5-Best-Dubais-Communities-Boasting-Spectacular-Views.jpg" alt="Album" className='' /></figure>
  <div class="card-body w-full mr-20 m-10">
        <div class="form-control">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" class="input input-bordered" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" class="input input-bordered" />
          <label class="label">
            <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div class="form-control mt-6">
          <button class="btn btn-primary">Login</button>
        </div>
      </div>
</div>
    );
};

export default ContactFrom;