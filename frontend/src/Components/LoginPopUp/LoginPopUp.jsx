import React, { useState } from 'react'
import './LoginPopUp.css'
import { assets } from '../../Assets/assets'

const LoginPopUp = ({setShowLogin}) => {
    const[currState, setCurrState] = useState("LogIn")
  return (
    <div className='login-popup'>
     <form action="" className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currState}</h2>
            <img onClick={() =>setShowLogin(false)}src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-input">
            {currState==="LogIn"?<></>:<input type="text" placeholder='Your name' required />}       
            <input type="email" placeholder='Your email xyz@gmail.com' required />
            <input type="password" placeholder='Password 12a@65S' required />
        </div>
        <button>{currState==="Sign Up" ?"Create account" :"LogIn"}</button>
        <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>By continuing,i agree to the term of use & privacy pilicy.</p>
        </div>
        {currState==="LogIn"
        ?<p>Create a new account? <span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>
        :<p>Already have an account. <span onClick={() =>setCurrState("LogIn")}>Login here</span></p>}
     </form>
    </div>
  )
}

export default LoginPopUp
