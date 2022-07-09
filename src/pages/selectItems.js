
import React, { createContext } from 'react';

function SelectItems(){
  
  const UserContext = createContext();
  let items=[{Name:"M31 Mobile", category : "Electronics", value:"30000"},{Name:"F1 Mobile", category : "Electronics", value:"5000"}]

  return (
   <div className='centerBox'>
   {items[0].Name}
aaaaaaaaaa
   </div>

  )
}

export default SelectItems;
