import React, { useContext } from "react";
import { themeContext } from "../../App";
import "./navbar.css";
import { Box, Flex } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
const Navbar = () => {
  const { setToggleTheme, toggleTheme } = useContext(themeContext);
  const handlingTheme = () => {
    setToggleTheme(!toggleTheme);
  };
 
  return (

    <Flex
      width={"90%"}
      margin={"auto"}
      justifyContent={"center"}
      alignItems={"center"}
      height={"90px"}
    >
      <Box
        fontSize={"3rem"}
        fontWeight={"600"}
        width='50%'
        textAlign='left'
      >
        Where in the world ?
      </Box>

      <Flex 
      gap={"10px"}
      justifyContent= {'flex-end'}
      fontWeight ={"600"}
      fontSize ={"1.4rem"}
      width ={"50%"}
      textAlign =  {"right"}
      onClick={handlingTheme}>

        <span>
          {" "}
          <FontAwesomeIcon icon={faMoon} className="fa-moon" />
        </span>
        <h3>Dark Mode</h3>
      </Flex>



    </Flex>
  );
};

export default Navbar;
