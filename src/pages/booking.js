import './index.css';
import React, { createContext } from 'react';

function Booking() {

    const UserContext = createContext();
    let items=[{Name:"M31 Mobile", category : "Electronics", value:"30000"},{Name:"F1 Mobile", category : "Electronics", value:"5000"}]
    return (
        
        <UserContext.Provider value={items}>

        </UserContext.Provider>
    )
}

export default Booking;
