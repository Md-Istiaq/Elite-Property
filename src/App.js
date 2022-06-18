import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import 'font-awesome/css/font-awesome.min.css';
import 'tw-elements';
import Header from './Shared/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Blogs from './Pages/Blogs/Blogs';
import AllProperties from './Pages/Home/PopularProperties/AllProperties';
import Login from './Pages/Login/Login';
import { ToastContainer } from 'react-toastify';
import SignUp from './Pages/Login/SignUp';
import RequirAuth from './Shared/RequirAuth';
import Booking from './Pages/Home/PopularProperties/Booking';
import AddReview from './Pages/AddReview/AddReview';
import MyOrder from './Pages/MyOrders/MyOrder';
import PageNotFound from './Pages/PageNotFound';
import Dashboard from './Pages/Dashboard/Dashboard';
import AddProperty from './Pages/Dashboard/AddProperty';
import ManageProperty from './Pages/Dashboard/ManageProperty'
import MakeAdmin from './Pages/Dashboard/MakeAdmin'
import ManageBookings from './Pages/Dashboard/ManageBookings'
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/blogs' element={<Blogs/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/allproperties' element={
          <RequirAuth>
            <AllProperties/>
          </RequirAuth>
        }></Route>
        <Route path='/review' element={
          <RequirAuth>
            <AddReview/>
          </RequirAuth>
        }></Route>
        <Route path='/myorders' element={
          <RequirAuth>
            <MyOrder/>
          </RequirAuth>
        }></Route>
        <Route path='/dashboard' element={
          <RequirAuth>
            <Dashboard></Dashboard>
          </RequirAuth>
        }>
        <Route index element={<AddProperty/>} />
        <Route path='makeadmin' element={<MakeAdmin/>}></Route>
        <Route path='manageproperty' element={<ManageProperty/>}></Route>
        <Route path='managebookings' element={<ManageBookings/>}></Route>
        </Route>
        <Route path='/properties/:id' element={
          <RequirAuth>
            <Booking/>
          </RequirAuth>
        }></Route>
        <Route path='*' element={<PageNotFound/>}></Route>
      </Routes>
      <ToastContainer/>
    </div>
  );
}

export default App;
