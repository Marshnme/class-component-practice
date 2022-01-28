
import React,{ Component } from 'react';
import './App.css';
import CustomerList from './CustomerList';
import NavBar from "./NavBar"
import ShoppingCart from './ShoppingCart';
import Login from './Login';

class App extends Component{
  render(){
    return(
      <>
        <NavBar/>
        <Login/>
        {/* <ShoppingCart x="10"/> */}
      </>
    )
  }
}

export default App;