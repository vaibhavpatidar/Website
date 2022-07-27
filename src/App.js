import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login'
import Registration from './pages/Registration'
import { SelectItems } from './pages/selectItems';
import AllProducts from './pages/AllProducts'
import ProductDetail from './pages/productdetail'
import Checkout from './pages/checkout';
import React from 'react';
import { CardContextProvider } from './components/CartContextProvider';

function App() {
  return (
    <BrowserRouter>
      <CardContextProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/selectItems" element={<SelectItems />} />
          <Route path="/allproducts" element={<AllProducts />} />
          <Route path="/productdetail" element={<ProductDetail />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </CardContextProvider>
    </BrowserRouter>
  );
}

export default App;
