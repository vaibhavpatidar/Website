import './index.css';
import React, { useContext, useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import products from '../assets/Productsinfo.json'
import Sidenavigation from '../components/SideNavigation';
import { CartContext } from '../components/CartContextProvider';
import { useNavigate } from 'react-router-dom';


function AllProducts() {
    const {cartItems, setItems}  = useContext(CartContext);
    const [sideNav, setSideNav] = useState(1);

    let user= sessionStorage.getItem("Login_name");
    if(user==0){
      navigate('/')
    }
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

    let navigate=useNavigate()
    function details(code){
        navigate('/ProductDetail',{state:{Code : code}});
      }

      useEffect(()=>{
        let user= sessionStorage.getItem("Login_name");
        let list = JSON.parse(localStorage.getItem(user))
        if(list!= null){setItems(list)}
      }, [])
    
      function logout(){
        sessionStorage.setItem("Login_name", "0")
        navigate('/')
      }

    return (
        <div className=''>
        <Sidenavigation sideNavFlag={sideNav}  UserName={user} sideNavCloseFlag={(flag) => setSideNav(flag)}/>
        <div className='navigationHeader'>
            <div className='navigation'>
                <ul>
                    <li><button className='navigation_button colorblack' onClick={() => navigate('/selectItems')}>Home</button></li>
                    <li><button className='navigation_button colorblack'>About</button></li>
                    <li><button className='navigation_button colorblack' onClick={() => navigate('/allproducts')}>Products</button></li>
                    <li><button className='navigation_button colorblack' onClick={showSideNav}>Cart<sup style={{ backgroundColor: "red", color: "white", padding: "0px 4px", borderRadius: "10px" }}>{cartItems.length}</sup></button></li>
                    <li><button className='navigation_button colorblack' onClick={()=>navigate('/checkout')}>Check out</button></li>
                    <li><button className='navigation_button colorblack' onClick={()=>logout()}>Logout</button></li>
                </ul>
            </div>
        </div>
            <div className='feature'>
                <p className='product_heading'>Products</p>
                <Row>
                  
                    {products.map((product,i) => (
                 
                        <Col>
                          <div onClick={()=>details(product.Code)}>
                            <img src={require(`../assets/images/${product.Image}.jpg`)} style={{ width: "300px", padding: "10px", height: "250px" }} key={i}  />
                            <p>{product.Name}</p><p>₹ {product.Price}</p>
                            <button className='button' style={{ padding: "3px 5px" }}>Buy now</button>
                            <button className='button' style={{ padding: "3px 5px", marginLeft: "15px", backgroundColor: "#e60000" }}
                                onClick={(event) =>{event.stopPropagation(); AddCart(product.Code, product.Name, product.Price, product.Image)}}>Add to Cart</button>
                        </div>
                        </Col>
                    ))
                    }
                </Row>
            </div>
        </div>
    )
}

export default AllProducts;
