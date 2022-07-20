import React, { createContext, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.css';
import AddToCart from './AddToCart';
import Sidenaviagtion from '../components/SideNavigation';
import { Navigate, useNavigate } from 'react-router-dom';

export const UserContext = React.createContext([]);


export function SelectItems() {
  const [cart, setCart] = useState([]);
  const [sideNav, setSideNav] = useState(0);

  function AddCart(code, name, price, img) {
    let index = cart.findIndex(x => x.Code === code);
    console.log("==", index)
    if (index == -1) {
      let cartDetail = { Code: code, Name: name, Price: price, Image: img, Quantity: 1 };
      setCart(cart => [...cart, cartDetail])
    }
    else {
      let newCart = cart;
      newCart[index].Quantity += 1;
      setCart(newCart)
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
  let navigate = useNavigate()
  function Allproduct(){
     navigate({
                 pathname: '/AllProducts'
                 // search: `?email=${encryptEmail(this.state.email)}`
               
              });
  }

  return (
    <UserContext.Provider value={cart}>
      <div className='main'>
        <Sidenaviagtion sideNavFlag={sideNav} sideNavCloseFlag={(flag) => setSideNav(flag)}/>
        <div className='header'>
          <div className='navigation'>
            <ul>
              <li><button className='navigation_button'>Home</button></li>
              <li><button className='navigation_button'>About</button></li>
              <li><button className='navigation_button'>Product</button></li>
              <li><button className='navigation_button' onClick={showSideNav}>Cart<sup style={{ backgroundColor: "red", color: "white", padding: "0px 4px", borderRadius: "10px" }}>{cart.length}</sup></button></li>
            </ul>
          </div>
          <div className='content'>
            <p>Buy Any Thing you Want</p><p>At Low Price</p>
            <button className='button' onClick={()=> Allproduct()}>All Product</button>
          </div>
        </div>
        <div className='feature'>
          <p className='product_heading'>Products</p>
          <Row>
            <Col>
              <img src={require('../images/laptop.jpg')} style={{ width: "100%", padding: "10px", height: "250px" }} />
              <p>HP Laptop</p><p>₹ 50,000</p>
              <button className='button' style={{ padding: "3px 5px" }}>Buy now</button>
              <button className='button' style={{ padding: "3px 5px", marginLeft: "15px", backgroundColor: "#e60000" }}
                onClick={() => AddCart("laptop123", "Laptop HP", "50,000", "../images/laptop.jpg")}>Add to Cart</button>
            </Col>
            <Col>
              <img src={require('../images/shoes.jpg')} style={{ width: "100%", padding: "10px", height: "250px" }} />
              <p>Sparx Shoes</p><p>₹ 950</p>
              <button className='button' style={{ padding: "3px 5px" }}>Buy now</button>
              <button className='button' style={{ padding: "3px 5px", marginLeft: "15px", backgroundColor: "#e60000" }}
                onClick={() => AddCart("shoes123", "shoes", "950", "../images/shoes.jpg")}>Add to Cart</button>
            </Col>
            <Col>
              <img src={require('../images/suit.jpg')} style={{ width: "100%", padding: "10px", height: "250px" }} />
              <p>Formal Suit</p><p>₹ 2,500</p>
              <button className='button' style={{ padding: "3px 5px" }}>Buy now</button>
              <button className='button' style={{ padding: "3px 5px", marginLeft: "15px", backgroundColor: "#e60000" }}
                onClick={() => AddCart("FormalSuit123", "Formal Suit", "2,500", "../images/suit.jpg")}>Add to Cart</button>
            </Col>
          </Row>
        </div>
      </div>
    </UserContext.Provider>
  )
}

