import React , { useContext }   from 'react';
import { themeContext } from "../App";
import MainSection from './MainSection';
const Body = () => {
    const {toggleTheme , darkMode } = useContext(themeContext);
  return (
    <div
    className="main-container"
    style={{
      backgroundColor: `${
        !toggleTheme
          ? darkMode.dark.mainSectionBackground
          : darkMode.light.mainSectionBackground
      }`,
    }}
  >
    <MainSection />
  </div>
  );
}

export default Body;
