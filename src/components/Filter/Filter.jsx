import React, { useContext } from "react";
import { themeContext } from "../../App";
import "./filter.css";
import { Select, extendTheme, useTheme, Box } from "@chakra-ui/react";
const Filter = ({ handleOptionChange, Option, uniqueData, name }) => {
  const { setToggleTheme, toggleTheme, darkMode } = useContext(themeContext);
  const theme = useTheme();
  console.log(theme);
  function capitalizeFirstLetter(inputString) {
    return (
      inputString.charAt(0).toUpperCase() + inputString.slice(1).toLowerCase()
    );
  }

  return (
    <Box 
    alignItems={'center'}
        justifySelf={"flex-end"}
      textAlign={"right"}
      padding={"2rem 2rem"}
      boxShadow={"1px 2px 10px -5px rgba(0, 0, 0, 0.26)"}
      background={`${!toggleTheme ? 'rgb(43, 57, 69)' : 'white'}`}
    >
      <Select
        value={Option}
        onChange={handleOptionChange}
        outline={"none"}
        border={"none"}
        background={!toggleTheme ? `rgb(43, 57, 69)` : "white"}
        color={toggleTheme ? `black` : "white"}
        fontSize={"2rem"}
        width={"215px"}
        height={"100%"}

        style={{ "--select-bg": !toggleTheme ? "unset" : "white" }}
      >
        <option value="">{Option !== "" ? "" : name}</option>

        {uniqueData.map(
          (curr) =>
            curr !== "undefined" && (
              <option      value={curr.toLowerCase() ? curr.toLowerCase() : ""}>
                {capitalizeFirstLetter(curr)}
              </option>
            )
        )}
      </Select>
    </Box>
  );
};

export default Filter;
