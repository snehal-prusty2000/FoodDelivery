import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./Components/Footer/Footer";
import { useState } from "react";
import LoginPopUp from "./Components/LoginPopUp/LoginPopUp";

function App() {
    const[showLogIn , setShowLogin] =useState(false);
    return (
        <>
        {showLogIn?<LoginPopUp setShowLogin={setShowLogin} />:<></>}
            <div className="App">
                <Navbar setShowLogin={setShowLogin}/>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/order' element={<PlaceOrder />} />
                </Routes>
            </div>
            <Footer />
        </>
    );
}

export default App;
