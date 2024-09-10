import React, { useState } from "react";
import logo from "../../assests/images/logofoodsite.png"

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
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
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
