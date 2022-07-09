import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login'
import Registration from './pages/Registration'
import Booking from './pages/booking'
import SelectItems from './pages/selectItems';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/selectItems" element={<SelectItems />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
