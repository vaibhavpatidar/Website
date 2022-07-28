import './index.css';
import React, { useContext, useEffect, useState } from 'react';
import { child, get, getDatabase, ref } from 'firebase/database'
import { Navigate, useNavigate } from 'react-router-dom';
import { CartContext } from '../components/CartContextProvider';
import { FaAngleUp, FaAngleDown, FaTrash, FaArrowRight } from "react-icons/fa";
import Sidenavigation from '../components/SideNavigation';


function CheckOut() {
    const { cartItems, setItems } = useContext(CartContext)
    const [sideNav, setSideNav] = useState(1);

    var user = sessionStorage.getItem("Login_name");
    console.log("user", user)

    useEffect(() => {
        let user = sessionStorage.getItem("Login_name");
        if (user == 0) {
            navigate('/')
        }
        let list = JSON.parse(localStorage.getItem(user))
        if (list != null) { setItems(list) }
    }, [])

    let navigate = useNavigate()
    function details(code) {
        navigate('/ProductDetail', { state: { Code: code } });
    }

    function incrementQuantity(code) {
        let index = cartItems.findIndex(x => x.Code === code);
        cartItems[index].Quantity += 1;
        localStorage.setItem(user, JSON.stringify([...cartItems]));
        setItems([...cartItems])

    }

    function decrementQuantity(code) {
        let index = cartItems.findIndex(x => x.Code === code);

        if (cartItems[index].Quantity !== 1) {
            cartItems[index].Quantity -= 1;
            localStorage.setItem(user, JSON.stringify([...cartItems]));
            setItems([...cartItems])
        }
    }

    function itemdel(code) {
        let index = cartItems.findIndex(x => x.Code === code);
        let remove = cartItems.splice(index, 1);
        localStorage.setItem(user, JSON.stringify(cartItems));
        setItems(cartItems)
    }



    function logout() {
        sessionStorage.setItem("Login_name", "0")
        navigate('/')
    }

    let res = 0;
    return (
        <div className='checkbox'>
            <Sidenavigation sideNavFlag={sideNav} UserName={user} sideNavCloseFlag={(flag) => setSideNav(flag)} />
            <div className='navigationHeader'>
                <div className='navigation'>
                    <ul>
                        <li><button className='navigation_button colorblack' onClick={() => navigate('/selectItems')}>Home</button></li>
                        <li><button className='navigation_button colorblack'>About</button></li>
                        <li><button className='navigation_button colorblack' onClick={() => navigate('/allproducts')}>Products</button></li>
                        <li><button className='navigation_button colorblack' onClick={() => logout()}>Logout</button></li>

                    </ul>
                </div>
            </div>
            {cartItems.map((item) => {
                //calculat
                res += Number(item.Price) * item.Quantity
                return (
                    // <div className="user" key={items}>{items.Name} &nbsp;&nbsp;&nbsp; {items.Quantity} &nbsp;&nbsp; {items.Price} </div>
                    <div onClick={() => details(item.Code)} className="checkdisplay">
                        <table>
                            <tr>
                                <td style={{ width: "25%" }} rowSpan={'3'}>   <img src={require(`../assets/images/${item.Image}.jpg`)} style={{ width: "80px", padding: "5px", height: "70px" }} /></td>
                                <td style={{ width: "45%" }}><b>{item.Name}</b></td>
                                <td style={{ width: "15%" }} rowSpan={'3'}>
                                    <button onClick={(event) => { event.stopPropagation(); incrementQuantity(item.Code) }} style={{ border: "1px solid black" }}><FaAngleUp /></button>
                                    <button onClick={(event) => { event.stopPropagation(); decrementQuantity(item.Code) }} style={{ border: "1px solid black" }}><FaAngleDown /></button>
                                </td>
                                <td style={{ width: "15%" }} rowSpan={'3'} className="sideitemdel" ><FaTrash onClick={(event) => { event.stopPropagation(); itemdel(item.Code) }} /></td>
                            </tr>
                            <tr>
                                <td><b>Price :</b> {item.Price}</td>
                            </tr>
                            <tr>
                                <td><b>Quantity :</b> {item.Quantity}</td>
                            </tr>
                        </table>
                    </div>
                )
            })}
            <div>Total : {res}

            </div>
        </div>

    )
}

export default CheckOut;
