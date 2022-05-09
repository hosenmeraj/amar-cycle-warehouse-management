import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Home/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home/Home';

import NotFound from './components/Shared/NotFound/NotFound';
import Footer from './components/Shared/Footer/Footer';
import Login from './components/Login/Login/Login';
import Register from './components/Login/Register/Register';
import { ToastContainer } from 'react-bootstrap';
import Inventory from './components/Pages/Inventory/Inventory';
import ItemDetails from './components/Pages/ItemDetails/ItemDetails';
import RequireAuth from './components/Login/RequireAuth/RequireAuth';
import AddItem from './components/Pages/AddItem/AddItem';
import ManageItem from './components/Pages/ManageItem/ManageItem';
import MyItem from './components/Pages/MyItem/MyItem';
import UpdateInventory from './components/Pages/UpdateInventory/UpdateInventory';
import ManageInventory from './components/Pages/ManageInventory/ManageInventory';
import Blog from './components/Pages/Blog/Blog';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>
        <Route path='/manageinventory' element={<ManageInventory></ManageInventory>}></Route>
        <Route path='/additem' element={<AddItem></AddItem>}></Route>
        <Route path='/manageitem' element={<ManageItem></ManageItem>}></Route>
        <Route path='/update/:id' element={<UpdateInventory></UpdateInventory>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/inventory/:id' element={<RequireAuth>
          <ItemDetails></ItemDetails>
        </RequireAuth>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
