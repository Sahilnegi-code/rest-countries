import React , {useContext} from "react";
import {themeContext} from '../../App' ; 
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
const Navbar = () => {
const { setToggleTheme, toggleTheme} = useContext(themeContext);
const handlingTheme = ()=>{
setToggleTheme(!toggleTheme)
}

  return (
    
    <div className="navbar-wrapper container">
      <div className="nav-brand">Where in the world ?</div>
      <div className="mode-toggle" onClick={handlingTheme}>
        <span>
          {" "}
          <FontAwesomeIcon icon={faMoon} className="fa-moon" />
        </span>
        <h3>Dark Mode</h3>
      </div>

    </div>
  );
};

export default Navbar;
