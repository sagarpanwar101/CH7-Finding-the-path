import React, { useState } from "react";
import logo from "../../assests/images/logofoodsite.png"
import { Link } from "react-router-dom";

const Title = () => {
    return(
     <img className="logo" alt="logo" src={logo} /> 
    );
  } 

  const NavComponent = () => {     
    const [btnNameReact, setbtnNameReact]  = useState("Login");
    return (
      <div className="nav-items">
      <ul>
        <li> <Link to="/"> Home </Link></li>
        <li> <Link to="/about">About  </Link> </li>
        <li><Link to="/contact"> Contact  </Link> </li>
        <li><Link to ="/"> Cart </Link> </li>
        <button className="loginBtn" 
        onClick={()=> {
          btnNameReact === "Login" ?
          setbtnNameReact("Logout") :
          setbtnNameReact("Login");
        }}
        > {btnNameReact}
        </button>
      </ul>
    </div>
    );
  }

 const Header = () => {
    return (
      <div className="header">
        <Title />
        <NavComponent />
      </div>
    );
  };

  export default Header;
