import React from 'react';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import {useAuthState} from 'react-firebase-hooks/auth'
import auth from '../_firebase.init';
import useAdmin from '../hooks/useAdmin';

const Header = () => {
  const [user] = useAuthState(auth)
  
  const LogOut = () =>{
    signOut(auth)
    localStorage.removeItem('accessToken')
}
    const menuItems = <>
    <li class=""><Link to="/home">Home</Link></li>
    <li class=""><Link to="/blogs">Blogs</Link></li>
    <li class=""><Link to="/allproperties">Our residence</Link></li>
    <li class=""><Link to="/review">Add Review</Link></li>
    <li class=""><Link to="/myorders">My Bookings</Link></li>
    <li class=""><Link to="/dashboard">Dashboard</Link></li>
    {user ? <button class="" onClick={LogOut}>Sign Out</button>  : <li class=""><Link to="/login">LogIn</Link></li>}
    </>
    return (
<div class="navbar bg-base-100">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      {menuItems}
      </ul>
    </div>
    <a class="btn btn-ghost normal-case text-xl">Elite Property</a>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal p-0">
    {menuItems}
    </ul>
  </div>
  <div className="navbar-end">
  <label tabindex="1" for="my-drawer-2"  class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
  </div>
</div>
    );
};

export default Header;