import React, { useContext, useEffect, useState } from 'react'
import './LoginPopUp.css'
import { assets } from '../../Assets/assets'
import { StoreContext } from '../../Context/StoreContext'
import axios from 'axios';


const LoginPopUp = ({setShowLogin}) => {
    
    const{url ,setToken} = useContext(StoreContext)

    const[currState, setCurrState] = useState("LogIn");
    const [data,setData] = useState({
     name:"",
     email:"",
     password:""
    })

    const onChangeHandler = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        setData(data =>({...data,[name]:value}))
    }

    // useEffect(()=>{
    //    console.log(data);
    // },[data])

    const onLogin = async(event) =>{
       event.preventDefault();
      let newUrl = url ;
      if(currState=="LogIn"){
        newUrl += "/api/user/login"
      }
      else{
        newUrl += "/api/user/register"
      }

      const response = await axios.post(newUrl,data);

      if(response.data.success){
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token)
        setShowLogin(false)
      }else{
        alert(response.data.message)
      }
    }

  return (
    <div className='login-popup'>
     <form onSubmit={onLogin} action="" className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currState}</h2>
            <img onClick={() =>setShowLogin(false)}src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-input">
            {currState==="LogIn"?<></>:<input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Your name' required />}       
            <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Your email xyz@gmail.com' required />
            <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='Password 12a@65S' required />
        </div>
        <button type='submit'>{currState==="Sign Up" ?"Create account" :"LogIn"}</button>
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
