import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; 
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Payment from './Payment';
import Login from './Login'
import Orders from './Orders';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe('pk_test_51I3rpKA5NhSvBdPiYrqTwg0xqatHrGlm5lDVXAWkvifjviorlKtE1vNam0CCYGYyZdjFvwIKEwrbJ9cHzvyU7JvW00Z6tZALo8');

function App() {
  const [{}, dispatch] = useStateValue();

useEffect(() => {   // will only run once when the app component works
  
  auth.onAuthStateChanged(authUser => {
    console.log('THE USER IS >>>>', authUser);

    if (authUser) {  // the user just logged in/ the user was logged in 

      dispatch({
        type: 'SET_USER',
        user: authUser
      })
    } else { // the user is logged out 
        dispatch({
          type: 'SET_USER',
          user: null
        })
    }
  })
}, [])

  return (
    <Router>
      <div className="App">
        <Switch> 
          <Route path="/checkout">
           <Header />
           <Checkout />
          </Route>
          <Route path="/orders">
           <Header />
           <Orders />
          </Route>
          <Route path="/payment">
           <Header />
          <Elements stripe={promise}>
           <Payment />
           </Elements>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
            <Route path="/"> {/*this is the default route */}
             <Header />
             <Home /> 
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
