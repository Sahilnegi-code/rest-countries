import React, {useContext} from 'react';
import { themeContext } from "../../App";
import './filter.css'
const Filter = ({handleOptionChange, 
    Option ,
    uniqueData , name}) => {
    const { setToggleTheme, toggleTheme, darkMode } = useContext(themeContext);
    function capitalizeFirstLetter(inputString) {
        return (
          inputString.charAt(0).toUpperCase() + inputString.slice(1).toLowerCase()
        );
      }
      console.log(uniqueData);
      console.log(name)
      // console.log(uniqueData.map((curr)=> typeof(curr)));
  return (
    <div class="filter-region">
    

    <select
    
      value={Option}
      onChange={handleOptionChange}
      style={!toggleTheme ? darkMode.dark.selectTagCss : darkMode.light.selectTagCss }

    >
      <option value="">
        {Option !== "" ? "" : name}
      </option>
      {

      uniqueData.map((curr) => (
     
       curr !== 'undefined'  &&  <option    value={curr.toLowerCase() ? curr.toLowerCase() : ""} >
          {capitalizeFirstLetter(curr)}
        </option>

      ))

      }
    </select>
  </div>
  );
}

export default Filter;
