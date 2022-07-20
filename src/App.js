import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login'
import Registration from './pages/Registration'
import {SelectItems} from './pages/selectItems';
import AllProducts from './pages/AllProducts'

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/selectItems" element={<SelectItems />} />
          <Route path="/allproducts" element={<AllProducts />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
