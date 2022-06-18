import React from 'react';
import { useForm } from "react-hook-form";
import {Link , useLocation, useNavigate} from 'react-router-dom'
import {useSignInWithGoogle} from 'react-firebase-hooks/auth'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../_firebase.init';
import useToken from '../../hooks/useToken';
import {toast} from 'react-toastify'
const Login = () => {
    const [signInWithGoogle, Guser, Gloading, Gerror] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const onSubmit = data =>{ 
        signInWithEmailAndPassword(data.email , data.password)
        console.log(data.email , data.password)
    };
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const Navigate = useNavigate()
    const [token] = useToken(user || Guser)
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";
    if( token){
      Navigate(from , {replace:true})
    }
    if(error || Gerror){
      toast.error(error || Gerror)
    }
    return (
        <div class="hero min-h-screen bg-base-200">
    <div class="hero-content flex-col lg:flex-row-reverse">
    <div class="text-center lg:text-left">
      <h1 class="text-5xl font-bold">Login now!</h1>
      <p class="py-6">Welcome to our website.Please log in into our website to be able to use our website's feature. you can not use the website without logging in. you can use Google to log in uur website</p>
    </div>
    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit(onSubmit)} class="card-body">
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
        <p className='text-white'><small className="text-white">New to Dental Clinic? <Link to='/signup' className='link login-from'>Create an account</Link></small> </p>
        <div class="form-control mt-6">
          <input type="submit" value="Log In" className='btn btn-primary' />
        </div>
        <p className='text-white'>---------------or-----------------</p>
        <button onClick={() => signInWithGoogle()} class="btn btn-primary">Continue With Google</button>
      </form>
    </div>
  </div>
        </div>
    );
};

export default Login;