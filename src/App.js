
import React,{ Component } from 'react';
import './App.css';
import CustomerList from './CustomerList';
import NavBar from "./NavBar"
import ShoppingCart from './ShoppingCart';
import Login from './Login';
import Dashboard from './Dashboard';
import RedirectRoute from './RedirectRoute';
import {Routes,Route} from "react-router-dom";

class App extends Component{
  render(){
    return(
      <div>
        <NavBar/>
        <Routes>
          <Route exact path="/" element={<Login/>}/>
          <Route exact path="/dashboard" element={<Dashboard/>}/>
          <Route exact path="/customers" element={<CustomerList/>}/>
          <Route exact path="/cart" element={<ShoppingCart/>}/>
          <Route path="*" element={<RedirectRoute/>}/>
        </Routes>
      </div>
    )
  }
}

export default App;