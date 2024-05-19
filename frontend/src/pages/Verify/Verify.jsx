import React, { useContext, useEffect } from 'react'
import './Verify.css'
import { useNavigate, useSearchParams } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';
import axios from 'axios';



const Verify = () => {

const [searchParams,setSearchParams] = useSearchParams();
const success = searchParams.get("success");//this is the key and get value http://localhost:3000/verify?success=true&orderId=664898b9ef64bedae1d9bb87
const orderId = searchParams.get("orderId");
const navigate = useNavigate();
 
//console.log(success,orderId) 
const {url} = useContext(StoreContext);

const verifyPayment = async() =>{
    const response = await axios.post(url+"/api/order/verify",{success,orderId});
    if(response.data.success){
      navigate("/myorders")
    }else{
        navigate("/")
    }
}

useEffect(()=>{
   verifyPayment()
},[])

  return (
    <div className='verify'>
        <div className="spinner"></div>
      
    </div>
  )
}

export default Verify
