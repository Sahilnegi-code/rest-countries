import React, {useContext} from "react";
import "./notfound.css";
import {themeContext} from '../../App'
const NotFound = () => {
  const {toggleTheme} = useContext(themeContext);
  return (
    <div className="no-found"
    style={{color: `${ toggleTheme ? 'black' :'white'}`   }}
    >
      <h2> No such countries found </h2>
    </div>
  );
};

export default NotFound;
