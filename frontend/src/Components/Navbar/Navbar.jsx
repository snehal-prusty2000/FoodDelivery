import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../Assets/assets'
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';

const Navbar = ({setShowLogin}) => {
    const [menu, setMenu] = useState("home");
    const {getTotalCartAmount ,token,setToken} = useContext(StoreContext);

   const navigate = useNavigate();
     
    const logout = ()=>{
       localStorage.removeItem("token");
       setToken("");
       navigate("/");
       
    }

    return (
        <div className='navbar'>
            <Link to='/'><img src={assets.logo1} alt="" className="logo" style={{ width: '150px', height: '70px' }} /></Link>
            <ul className="navbar-menu">
                {/* <li onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</li> if menu === home then active class implement that for list */}
                <Link to ='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link> {/*if menu === home then active class implement that for list*/}
                <a href='' onClick={() => setMenu("about")} className={menu === "about" ? "active " : ""}>About</a>
                <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</a>
                <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>Mobile-App</a>
                <a href='#footer' onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact Us</a>
            </ul>
            <div className="navbar-right" >
                <img src={assets.search_icon} alt="" />
                <div className="navbar-search-icon">
                    {/* <img src={assets.basket_icon}alt="" className="src" /> */}
                      <Link to='/cart'><LocalGroceryStoreIcon /></Link>  
                    {/* <div className="dot"></div> */}
                    <div className={getTotalCartAmount()===0 ? "" : "dot"}></div>
                </div> 
                {!token ?<button onClick={()=>setShowLogin(true)}>Sign in</button>
                :<div className='navbar-profile'>
                   <img src={assets.profile_icon} alt="" />
                   <ul className="nav-profile-dropdown">
                     <li onClick={()=>navigate('/myorders')}><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
                     <hr />
                     <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
                   </ul>
                </div>}
                {/* <button onClick={()=>setShowLogin(true)}>Sign in</button> */}
            </div>
        </div>
    )
}

export default Navbar
