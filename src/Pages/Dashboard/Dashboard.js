import React from 'react';
import { Link, Outlet } from 'react-router-dom';


const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile ">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content bg-black">
      <h2 className='text-2xl text-primary text-center'>welcome to Dashboard</h2>
      <Outlet></Outlet>
  </div> 
  <div class="drawer-side">
    <label for="my-drawer-2" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-80 text-base-content bg-black">
    <li><Link to="/dashboard">Add Property</Link></li>
    <li><Link to="/dashboard/makeadmin">Make Admin</Link></li>
    <li><Link to="/dashboard/managebookings">Manage All Bookings</Link></li>
    <li><Link to="/dashboard/manageproperty">Manage Property</Link></li>
    </ul> 
  </div>
</div>
    );
};

export default Dashboard;