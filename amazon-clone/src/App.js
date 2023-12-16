import React, { useEffect } from "react";
import './App.css';
import Header from "./Header";
import Home from "./Home";
import {Routes, Route} from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./Firebase";
import { useStateValue } from "./StateProvider";
// import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";


const promise = loadStripe("pk_test_51ONWGVSDI1pY8dQpo06CUmMs60za83cYQYcWP1DUaIkNQn3IkCtj6L5a5mptCI3XLIHDWMnUh76S5orp6lS6lkPt007gGA8wfS");
function App() {

  const [{}, dispatch] = useStateValue();
  useEffect(() =>{
    // will only run when the app component loads.
    auth.onAuthStateChanged(authUser =>{
  
      if( authUser ){
        //the user just logged in / the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      }else{
        //the user is logged out
        dispatch({
          type:"SET_USER",
          user:null 
        })
      }
    })
  }, [])
  return (
    //BEM
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/checkout" element={<Checkout/> } />
        {/* <Route path="/payment" element={<Payment/>}/> */}
      </Routes>
      {/* <Elements stripe={promise}>
        <Payment/>
      </Elements> */}
    </div>
  );
}
export default App;
