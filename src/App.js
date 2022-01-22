
import React,{ Component } from 'react';
import './App.css';
import MainContent from './MainContent';
import NavBar from "./NavBar"
class App extends Component{
  render(){
    return(
      <>
        <NavBar/>
        <MainContent/>
      </>
    )
  }
}

export default App;