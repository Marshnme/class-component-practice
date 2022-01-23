
import React,{ Component } from 'react';
import './App.css';
import CustomerList from './CustomerList';
import NavBar from "./NavBar"
class App extends Component{
  render(){
    return(
      <>
        <NavBar/>
        <CustomerList/>
      </>
    )
  }
}

export default App;