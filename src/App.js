import React, { Component, createContext, useState } from "react";
import { Routes, Route, Outlet } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import MainSection from "./components/MainSection";
import Body from "./components/Body";
import CardDetails from "./components/CardDetails";

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
    },
    cardDetailsCss :{
      background:'white',
      height: '90vh',
      textColor:'black',
      button:{
        backgroundColor: 'white',
        color:'black'
      }
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
      },
      cardDetailsCss :{
        background:'hsl(207, 26%, 17%)',
        height: '90vh',
        color:'white',
        button:{
          backgroundColor: 'rgb(43, 57, 69)',
          color:'white',
          boxShadow :'none'
        }
      },

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

       <Navbar/>

        
      </div>

        <Routes>
        <Route path="/" element={<Body/>} />
        <Route path="/country/:id" element={<CardDetails/>} />
        </Routes>

    


    </themeContext.Provider>
  );
}

export default App;
