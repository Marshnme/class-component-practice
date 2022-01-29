import React,{ Component } from "react";
import {Link} from "react-router-dom";

class NavBar extends Component{
    render(){
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-style">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">eCommerce</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/"className="nav-link active" aria-current="page">Login</Link>
        </li>
        <li className="nav-item">
          <Link to="/dashboard" className="nav-link">Dashboard</Link>
        </li>
        <li className="nav-item">
          <Link to="/customers" className="nav-link">Customers</Link>
        </li>
        <li className="nav-item">
          <Link to="/cart" className="nav-link">Shopping Cart</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
            </div>
            
        )
    }
}

export default NavBar;