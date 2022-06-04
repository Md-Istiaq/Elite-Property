import logo from './logo.svg';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Header from './Shared/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Blogs from './Pages/Blogs/Blogs';
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/blogs' element={<Blogs/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
