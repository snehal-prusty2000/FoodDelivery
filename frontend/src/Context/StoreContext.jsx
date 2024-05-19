import axios from "axios";
import { createContext ,useEffect,useState} from "react";
//import { food_list } from "../Assets/assets";

// Context is a powerful tool that can be used to simplify and optimize the development
// experience when working with React and is especially useful when data needs to be shared across multiple components that are not directly related to each other

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    const[cartItems, setCartItems] = useState({});
    const url = "http://localhost:4000";
    const[token,setToken] = useState("");
    const[food_list,setFoodList] =useState([]);

   const addToCart = async (itemId) =>{
     if(!cartItems[itemId]){
        setCartItems((prev) => ({...prev,[itemId]:1}))
     }
     else{
        setCartItems((prev) =>({...prev,[itemId]:prev[itemId]+1}))
     }
     if(token){
      await axios.post(url+"/api/cart/add",{itemId},{headers:{token}})
     }
   }

   const removeFromCart = async(itemId) =>{
    setCartItems((prev) => ({...prev,[itemId]:prev[itemId]-1}))
    if(token){
      await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}})
     }
   }
   const getTotalCartAmount=() =>{
    let totalAmount = 0;
    for(const item in cartItems){//here cartItem are object so use for in loop
          if(cartItems[item] > 0){
            let itemInfo = food_list.find((product)=>product._id===item);
            totalAmount += itemInfo.price * cartItems[item]
          }
     
    }
    return totalAmount;
   }
   useEffect(()=>{
    console.log(cartItems);
   },[cartItems])

   const fetchFoodList = async()=>{
    const response = await axios.get(url+"/api/food/list");
    setFoodList(response.data.data)
   }

  //cart data show after refresh
  const loadCartData = async (token) => {
    const response = await axios.post(`${url}/api/cart/get`, {}, { headers: { token } });
    setCartItems(response.data.cartData);
  }

   //after refresh not come back to sign in page
   useEffect(()=>{
    // if(localStorage.getItem("token")){
    //   setToken(localStorage.getItem("token"))
    // }
    async function loadData(){
      await fetchFoodList();
    //  const token = localStorage.getItem("token");
      if(localStorage.getItem("token")){
        setToken(localStorage.getItem("token"));
        await loadCartData(localStorage.getItem("token"));
      }
    }
    loadData();
   },[])

    const contextValue = {
        food_list ,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        url,
        token,
        setToken
    }
    return (
    <StoreContext.Provider value = {contextValue} >
        {props.children}
        </StoreContext.Provider >
    )
}

export default StoreContextProvider;



// // Step 1: Create the context
// const MyContext = React.createContext();

// // Step 2: Provide the context at the top of your component tree
// function App() {
//   const data = "Hello from Context!";
  
//   return (
//     <MyContext.Provider value={data}>
//       <ChildComponent />
//     </MyContext.Provider>
//   );
// }

// // Step 3: Consume the context in child components
// function ChildComponent() {
//   const contextData = React.useContext(MyContext);
  
//   return <p>{contextData}</p>;
// }

// // Use App as the root component
// ReactDOM.render(<App />, document.getElementById('root'));
