
import React,{ Component } from 'react';
import './App.css';
import CustomerList from './CustomerList';
import NavBar from "./NavBar"
import ShoppingCart from './ShoppingCart';
class App extends Component{
  render(){
    return(
      <>
        <NavBar/>
        <ShoppingCart/>
      </>
    )
  }
}

export default App;