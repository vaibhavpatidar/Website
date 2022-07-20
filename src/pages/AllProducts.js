import './index.css';
import React, { useEffect, useState } from 'react';
import { child, get, getDatabase, ref } from 'firebase/database'
import { Navigate, useNavigate } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function AllProducts() {

    const [product, setProduct] = useState([
        { Code: "Mobile_sum_1", Name: "Samsung Mobile", Price: "30,000", Image: '../images/suit.jpg' },
        { Code: "Mobile_moto_2", Name: "Motorola Mobile", Price: "41,000", Image: "../images/suit.jpg" },
        { Code: "Laptop_Hp_1", Name: "HP Laptop", Price: "80,000", Image: "../images/suit.jpg" },
        { Code: "Shoes_sparx_1", Name: "Shoes Sparx", Price: "900", Image: "../images/suit.jpg" },
        { Code: "Bag_school_1", Name: "School Bag AT", Price: "1,200", Image: "../images/suit.jpg" },
        { Code: "Hand_bag_1", Name: "Hand Bag", Price: "500", Image: "../images/suit.jpg" },
        { Code: "Dress_boy_1", Name: "Boys Dress", Price: "1,500", Image: "../images/suit.jpg" },
        { Code: "Girls_dress_1", Name: "Girl Dress", Price: "1,800", Image: "../images/suit.jpg" },
        { Code: "Watch_titan_1", Name: "Titan Watch", Price: "2,000", Image: "../images/suit.jpg" },
        { Code: "Earphone_boat_1", Name: "Boat Earphone", Price: "850", Image: "../images/suit.jpg" },
        { Code: "Purse_1", Name: "Girl Purse", Price: "400", Image: "../images/suit.jpg" },
        { Code: "Formaldress_1", Name: "Formal dress", Price: "3,000", Image: "../images/suit.jpg" },
        { Code: "Suit_1", Name: "Suit", Price: "1,400", Image: "../images/suit.jpg" },
        { Code: "Shoes_formal_1", Name: "Formal Shoes", Price: "960", Image: "../images/suit.jpg" },
        { Code: "Car_cover_1", Name: "Car Cover", Price: "1,000", Image: "../images/suit.jpg" },
        { Code: "Bed_cover_1", Name: "Bed Cover", Price: "700", Image: "../images/suit.jpg" },
        { Code: "Charger_1", Name: "C Type Charger", Price: "600", Image: "../images/suit.jpg" },
        { Code: "Cotton_scoks_1", Name: "Cotton Scoks", Price: "300", Image: "../images/suit.jpg" },
        { Code: "Keyboard_1", Name: "Wireless Keyboard", Price: "900", Image: "../images/suit.jpg" },
        { Code: "Cotton_dress_1", Name: "Cotton Dress", Price: "2,500", Image: "../images/suit.jpg" },
        { Code: "Traditional_dress_1", Name: "Traditional Dress", Price: "3,000", Image: "../images/suit.jpg" },
        { Code: "Traveling_bag_1", Name: "Travel Bag", Price: "1,500", Image: "../images/suit.jpg" },
        { Code: "Shoes_2", Name: "Casual Shoes", Price: "1,200", Image: "../images/suit.jpg" }

    ])

    function AddCart(code, name, price, img){
        
    }
    return (
        <div className=''>
             <div className='feature'>
          <p className='product_heading'>Products</p>
            <Row>
                {product.map(products => (
                    // {let imgs= products.Image}
                    <Col>
                        <img src={require('../images/laptop.jpg')} style={{ width: "300px", padding: "10px", height: "250px" }} />
                        <p>{products.Name}</p><p>₹ {products.Price}</p>
                        <button className='button' style={{ padding: "3px 5px" }}>Buy now</button>
                        <button className='button' style={{ padding: "3px 5px", marginLeft: "15px", backgroundColor: "#e60000" }}
                            onClick={() => AddCart(products.Code, products.Name, products.Price, products.Image)}>Add to Cart</button>
                    </Col>
                ))
                }
            </Row>
            </div>
        </div>
    )
}

export default AllProducts;
