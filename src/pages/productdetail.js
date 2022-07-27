import './index.css';
import React, { useContext, useEffect, useState } from 'react';
import Products from '../assets/Productsinfo.json'
import { CartContext } from '../components/CartContextProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import Sidenavigation from '../components/SideNavigation';


function ProductDetail() {
    const { cartItems, setItems } = useContext(CartContext);
    const [sideNav, setSideNav] = useState(1);

    const location = useLocation();
    let code = location.state.Code;
    let index = Products.findIndex(x => x.Code == code);
    var user = sessionStorage.getItem("Login_name");

    function showSideNav() {
        if (sideNav == 0) {
            setSideNav(1);
        }
        else {
            setSideNav(0);
        }
    }

    useEffect(() => {
        var user = sessionStorage.getItem("Login_name");
        let list = JSON.parse(localStorage.getItem(user))
        if (list != null) { console.log(list); setItems(list); }
    }, [])

    let cartindex = cartItems.findIndex(x => x.Code === code);
    let quantity = 0;
    if (cartindex == -1) {
        quantity = 0;
    }
    else {
        quantity = cartItems[cartindex].Quantity;
    }

    function AddCart(img, name, productcode, price, quantityprodunct) {
        if (quantityprodunct == 0) {
            let cartDetail = { Code: productcode, Name: name, Price: price, Image: img, Quantity: 1 };
            localStorage.setItem(user, JSON.stringify([...cartItems, cartDetail]));
            setItems([...cartItems, cartDetail]);
        }
        else {
            let index = cartItems.findIndex(x => x.Code === code);
            cartItems[index].Quantity += 1;
            localStorage.setItem(user, JSON.stringify([...cartItems]));
            setItems([...cartItems])
        }
    }
    let navigate = useNavigate()



    return (
        <div className=''>
            <Sidenavigation sideNavFlag={sideNav} UserName={user} sideNavCloseFlag={(flag) => setSideNav(flag)} />
            <div className='navigationHeader'>
                <div className='navigation'>
                    <ul>
                        <li><button className='navigation_button colorblack' onClick={() => navigate('/selectItems')}>Home</button></li>
                        <li><button className='navigation_button colorblack'>About</button></li>
                        <li><button className='navigation_button colorblack' onClick={() => navigate('/allproducts')}>Products</button></li>
                        <li><button className='navigation_button colorblack' onClick={showSideNav}>Cart<sup style={{ backgroundColor: "red", color: "white", padding: "0px 4px", borderRadius: "10px" }}>{cartItems.length}</sup></button></li>
                        <li><button className='navigation_button colorblack' onClick={()=>navigate('/checkout')}>Check out</button></li>
                    </ul>
                </div>


            </div>
            <div className="row detailbox" >
                <div className="col-md-4 productimg" >
                    <img src={require(`../assets/images/${Products[index].Image}.jpg`)} className="productimg" />
                </div>
                <div className="col-md-8 productdetail">
                    <h2>{Products[index].Name}</h2>
                    <h3>{Products[index].Title}</h3>
                    <br></br>
                    <h3>Price : {Products[index].Price}</h3>
                    <br></br>
                    <h3>Quantity : {quantity}</h3>
                    <button className='button buyNowFeature'>Buy now</button>
                    <button className='button addToCartbutton'
                        onClick={(event) => { AddCart(Products[index].Image, Products[index].Name, code, Products[index].Price, quantity) }}>Add to Cart</button>
                    <br></br><br></br>
                    <h5>About this item : <p>{Products[index].About}</p></h5>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail;
