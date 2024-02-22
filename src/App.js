import React, { Component, createContext, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import MainSection from "./components/MainSection";
import { Router } from "react-router-dom";

export const themeContext = createContext(null);
function App() {
  const [toggleTheme, setToggleTheme] = useState(true);
  const darkMode = {
    light: {
      navbarBackground: "white",
      navbarColor: "black",
      mainSectionBackground: "white",
      selectTagCss: {
        textAlign :'center',
        background: "white",
        border: "none",
        outline: "none",
        background: 'white',
     boxShadow: '7px 1px 24px -16px rgba(0, 0, 0,0.83)',
    }
  },
    dark: {
      navbarBackground: "hsl(209, 23%, 22%)",
      navbarColor: "white",
      mainSectionBackground: "hsl(207, 26%, 17%)",
      selectTagCss: {
        textAlign :'center',
        background: "rgb(43, 57, 69)",
        color: "white",
        border: "none",
        outline: "none",
        

      },
      inputBox:{
        'input::placeholder':{
          color :'white',
        }
      }
    },
  };
  console.log(toggleTheme);
  return (
    <themeContext.Provider value={{ setToggleTheme, toggleTheme, darkMode }}>
      <div
        className="nav-shadow"
        style={{
          color: `${
            !toggleTheme
              ? darkMode.dark.navbarColor
              : darkMode.light.navbarColor
          }`,
          backgroundColor: `${
            !toggleTheme
              ? darkMode.dark.navbarBackground
              : darkMode.light.navbarBackground
          }`,
        }}
      >
        <Navbar />
      </div>



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


    </themeContext.Provider>
  );
}

export default App;
