import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Home/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import Items from './components/Pages/Items/Items';
import NotFound from './components/Shared/NotFound/NotFound';
import Footer from './components/Shared/Footer/Footer';
import Login from './components/Login/Login/Login';
import Register from './components/Login/Register/Register';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/items' element={<Items></Items>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
