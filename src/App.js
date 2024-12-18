import React , {useEffect} from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import Orders from "./Orders";
import {BrowserRouter as Router , Routes , Route} from "react-router-dom";
import {auth} from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';

const promise = loadStripe('pk_test_51N5oFeSH8as93yuLJXD5E8oyUbirh40gTsrb36zUQYcfDLEacodHeDJurcSS656bcL0yybHuTpkNROoYbJ3dMK3X00Gzram4Nz');
function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged(authUser => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
    <div className="app">
      <Routes>
      <Route path="/orders" element = {[<Header/>,<Orders/>]} >
        </Route>
      <Route path="/login" element = {[<Login/>]} >
        </Route>
      <Route path="/checkout" element = {[<Header/>,<Checkout/>]} >
        </Route>
        <Route path="/payment" element = {[<Header/>,<Elements stripe={promise}>
        <Payment/>
        </Elements>]} >
        </Route>
        <Route path="/" element = {[<Header/>,<Home/>]}>
        </Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
