import React, { createContext, useContext, useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.css';
import AddToCart from './AddToCart';
import Sidenaviagtion from '../components/SideNavigation';
import { Navigate, useNavigate } from 'react-router-dom';
import { CardContextProvider, CartContext } from '../components/CartContextProvider';



export function SelectItems() {
  const [sideNav, setSideNav] = useState(1);
  const { cartItems, setItems } = useContext(CartContext)

  var user= sessionStorage.getItem("Login_name");

  useEffect(()=>{
    var user= sessionStorage.getItem("Login_name");

    let list = JSON.parse(localStorage.getItem(user))
    if(list!= null){setItems(list)}
  }, [])

  function AddCart(code, name, price, img) {
    let index = cartItems.findIndex(x => x.Code === code);

    if (index == -1) {
      let cartDetail = { Code: code, Name: name, Price: price, Image: img, Quantity: 1 };
     localStorage.setItem(user, JSON.stringify([...cartItems, cartDetail]));
      setItems([...cartItems, cartDetail]);
    }
    else {
      cartItems[index].Quantity += 1;
      localStorage.setItem(user, JSON.stringify([...cartItems]));
      setItems([...cartItems])
      
    }
  }

  function showSideNav() {
    if (sideNav == 0) {
      setSideNav(1);
    }
    else {
      setSideNav(0);
    }
  }


    let navigate =useNavigate()
  function Allproduct() {
    navigate({
      pathname: '/AllProducts',
      // search: `?email=${encryptEmail(this.state.email)}`
    });
  }

 function details(code){
    navigate('/ProductDetail',{state:{Code : code}});
  }
 
  return (
    <div className='main'>
      <Sidenaviagtion sideNavFlag={sideNav} UserName={user} sideNavCloseFlag={(flag) => setSideNav(flag)} />
      <div className='header'>
        <div className='navigation'>
          <ul>
            <li><button className='navigation_button' onClick={()=>navigate('/selectItems')}>Home</button></li>
            <li><button className='navigation_button'>About</button></li>
            <li><button className='navigation_button'onClick={()=>navigate('/allproducts')}>Products</button></li>
            <li><button className='navigation_button' onClick={showSideNav}>Cart<sup style={{ backgroundColor: "red", color: "white", padding: "0px 4px", borderRadius: "10px" }}>{cartItems.length}</sup></button></li>
            <li><button className='navigation_button' onClick={()=>navigate('/checkout')}>Check out</button></li>
          </ul>
        </div>
        <div className='content'>
          <p>Buy Any Thing you Want</p><p>At Low Price</p>
          <button className='button' onClick={() => Allproduct()}>All Product</button>
        </div>
      </div>
      <div className='feature'>
        <p className='product_heading'>Products</p>
        <Row>
          <Col>
            <div onClick={()=> details('Laptop_Hp_1')}>
              <img src={require('../assets/images/laptop.jpg')} className='imgfeature' />
              <p>HP Laptop</p>
              <p>₹ 50,000</p>
              <button className='button buyNowFeature'>Buy now</button>
              <button className='addToCartbutton button '
                onClick={(event) =>{event.stopPropagation(); AddCart("Laptop_Hp_1", "Laptop HP", "50000", "laptop")}}>Add to Cart</button>
            </div>
          </Col>
          <Col>
          <div onClick={()=> details('Shoes_2')}>
            <img src={require('../assets/images/Shoes_2.jpg')} className='imgfeature' />
            <p>Sparx Shoes</p><p>₹ 1200</p>
            <button className='button buyNowFeature'>Buy now</button>
            <button className='button addToCartbutton'
              onClick={(event) =>{event.stopPropagation(); AddCart("Shoes_2", "shoes", "1200", "shoes")}}>Add to Cart</button>
              </div>
          </Col>
          <Col>
          <div onClick={()=> details('Formaldress_1')}>
            <img src={require('../assets/images/suit.jpg')} className='imgfeature' />
            <p>Formal Suit</p><p>₹ 2,500</p>
            <button className='button buyNowFeature'>Buy now</button>
            <button className='button addToCartbutton'
              onClick={(event) => {event.stopPropagation();AddCart("Formaldress_1", "Formal Suit", "2500", "suit")}}>Add to Cart</button>
          </div>
          </Col>
        </Row>
      </div>
    </div>

  )
}

