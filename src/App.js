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
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/blogs' element={<Blogs/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/allproperties' element={<AllProperties/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
