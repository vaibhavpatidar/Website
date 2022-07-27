import './index.css';
import React, { useContext } from 'react';
import { UserContext } from '../App'
import { CartContext } from '../components/CartContextProvider';
import { FaAngleUp, FaAngleDown, FaTrash, FaArrowRight} from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

function AddToCart({ UserName }) {
  const { cartItems, setItems } = useContext(CartContext)
  console.log(cartItems)


  function incrementQuantity(code) {
    let index = cartItems.findIndex(x => x.Code === code);
    cartItems[index].Quantity += 1;
    localStorage.setItem(UserName, JSON.stringify([...cartItems]));
    setItems([...cartItems])

  }

  function decrementQuantity(code) {
    let index = cartItems.findIndex(x => x.Code === code);

    if (cartItems[index].Quantity !== 1) {
      cartItems[index].Quantity -= 1;
      localStorage.setItem(UserName, JSON.stringify([...cartItems]));
      setItems([...cartItems])
    }
  }

  function itemdel(code) {
    let index = cartItems.findIndex(x => x.Code === code);
    let remove = cartItems.splice(index, 1);
    localStorage.setItem(UserName, JSON.stringify(cartItems));
    setItems(cartItems)
  }

  let navigate =useNavigate()
  function details(code){
    navigate('/ProductDetail',{state:{Code : code}});
  }

  function checkout(){
    navigate('/Checkout');
  }

let res=0;
  return (
    <div className='sideNavBox'>

      {cartItems.map((item) => 
      {
        //calculat
        res += Number(item.Price)* item.Quantity
      return ( 
        // <div className="user" key={items}>{items.Name} &nbsp;&nbsp;&nbsp; {items.Quantity} &nbsp;&nbsp; {items.Price} </div>
        <div onClick={()=> details(item.Code)}>
          <table>
            <tr>
              <td style={{ width: "25%" }} rowSpan={'3'}>   <img src={require(`../assets/images/${item.Image}.jpg`)} style={{ width: "80px", padding: "5px", height: "70px" }} /></td>
              <td style={{ width: "45%" }}><b>{item.Name}</b></td>
              <td style={{ width: "15%" }} rowSpan={'3'}>
                <button onClick={(event) =>{event.stopPropagation(); incrementQuantity(item.Code)}} style={{ border: "1px solid black" }}><FaAngleUp /></button>
                <button onClick={(event) =>{event.stopPropagation(); decrementQuantity(item.Code)}} style={{ border: "1px solid black" }}><FaAngleDown /></button>
              </td>
              <td style={{ width: "15%" }} rowSpan={'3'} className="sideitemdel" ><FaTrash onClick={(event) => {event.stopPropagation();itemdel(item.Code)}} /></td>
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
      <div className='totalbox'>Total : {res}
          <button className='checkout' onClick={(event)=>{event.stopPropagation();checkout()}}>Checkout <FaArrowRight/>
          </button>
      </div>
    </div>
  )
}

export default AddToCart;
