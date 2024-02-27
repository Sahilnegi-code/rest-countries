import React , { useContext }   from 'react';
import { themeContext } from "../../App";
import MainSection from '../Main-Section/MainSection';
const Body = () => {
    const {toggleTheme , darkMode } = useContext(themeContext);
  return (
    <div
  
    style={{
      backgroundColor: `${
        !toggleTheme
          ? darkMode.dark.mainSectionBackground
          : darkMode.light.mainSectionBackground
      }`,
      minHeight:'100vh'
    }}
  >
    <MainSection />
  </div>
  );
}

export default Body;
