import React from 'react';
import {useSignInWithGoogle} from 'react-firebase-hooks/auth';
import { useCreateUserWithEmailAndPassword ,useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../_firebase.init';
import { useForm } from "react-hook-form";
import {Link, useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import { async } from '@firebase/util';
const SignUp = () => {
    const [signInWithGoogle, Guser, Gloading, Gerror] = useSignInWithGoogle(auth);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [updateProfile, updating, Uerror] = useUpdateProfile(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const Navigate = useNavigate()
      const onSubmit = async data =>{ 
        console.log(data)
       await createUserWithEmailAndPassword(data.email,data.password)
       await updateProfile({ displayName: data.name })
    };
      if(user || Guser){
        Navigate('/home')
      }
    return (
        <div class="hero min-h-screen bg-base-200">
    <div class="hero-content flex-col lg:flex-row-reverse">
    <div class="text-center lg:text-left">
      <h1 class="text-5xl font-bold">SignUp now!</h1>
      <p class="py-6">Welcome to our website.Please Sign up into our website to be able to use our website's feature. you can not use the website without signing in. you can use Google to log in our website . if you previously have an account then go  to login</p>
    </div>
    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit(onSubmit)} class="card-body">
      <div class="form-control">
          <label class="label">
            <span class="label-text">name</span>
          </label>
          <input type="text" placeholder="name" class="input input-bordered" {...register("name", { required: true })} />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" class="input input-bordered" {...register("email", { required: true })} />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" class="input input-bordered" {...register("password", { required: true })} />
          <label class="label">
            <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <p className='text-white'><small className="text-white">Already have an account? <Link to='/login' className='link login-from'>go to login</Link></small> </p>
        <div class="form-control mt-6">
          <input type="submit" value="Sign Up" className='btn btn-primary' />
        </div>
        <p className='text-white'>---------------or-----------------</p>
        <button onClick={() => signInWithGoogle()} class="btn btn-primary">Continue With Google</button>
      </form>
    </div>
  </div>
        </div>
    );
};

export default SignUp;