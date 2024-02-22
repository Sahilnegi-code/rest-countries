import React, { useState, useEffect, createContext, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CounterContext } from "../CounterContext";
import Filter from "./Filter";
import { themeContext } from "../App";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./mainsection.css";
import Cards from "./Cards";
import NotFound from "./NotFound";
import Loading from "./Loading";
// import { Link } from "react-router-dom";
const MainSection = () => {
  const [countryData, setCountryData] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState("");
  const [subSelectedRegion, setSubSelectedRegion] = useState("");
  const [input, setInputValue] = useState("");
  const [loading, setLoading] = useState(true);
  const [  selectSortOption, setSelectSortOption  ] = useState("");

  const [uniqueRegion, setUniqueRegion] = useState([]);
  const { setToggleTheme, toggleTheme, darkMode } = useContext(themeContext);

  let sortedOption = [ 'Population(Asc)' , 'Population(Des)' , 'Area(Asc)' , 'Area(Des)'];
  function handlingInputChange(e) {
    setInputValue(e.target.value);
  }

  function handlingUniqueRegion(data) {
    let uniqRegion = data.reduce((acc, currObj) => {
      if (!acc.hasOwnProperty(currObj.region)) {
        acc[currObj.region] = "Present";
      }
      return acc;
    }, {});
    uniqRegion = Object.keys(uniqRegion);
    setUniqueRegion(uniqRegion);
  }

  let filterCountry = countryData.filter((country) => {
    if (country.name.common.toLowerCase().includes(input.toLowerCase())) {
      return true;
    }

    return false;
  });

  let filterSelectedRegion = selectedRegion.length
    ? filterCountry.filter((currData) => {
        return currData.region.toLowerCase() === selectedRegion.toLowerCase();
      })
    : filterCountry;

  let filterSubSelectedRegion = subSelectedRegion.length 
    ? filterSelectedRegion.filter((currData) => {
        return (
          currData.subregion.toLowerCase() === subSelectedRegion.toLowerCase()
        );
      })
    : filterSelectedRegion;

  let uniqueSubSelectedRegion = selectedRegion.length
    ? Object.keys(
        filterSelectedRegion.reduce((acc, currObj) => {
          acc[currObj.subregion] = "Present";

          return acc;
        }, {})
      )
    : [];

  function handleSelectedRegion(e) {
    let region = e.target.value;
    setSelectedRegion(e.target.value);
    if (selectedRegion) {
      setSubSelectedRegion("");
    }
  }



  let filterSortedOption = filterSubSelectedRegion.length !== 0 ?
  filterSubSelectedRegion.sort((country1 , country2)=>{

    if( selectSortOption.includes("Population(Asc)".toLowerCase()) ){
      return country1.population  < country2.population ? -1 :1 
    }

    else if( selectSortOption.includes("Population(Des)".toLowerCase()) ){
      return country1.population  > country2.population ? -1 :1 
    }
    else if( selectSortOption.includes("Area(Des)".toLowerCase()) ){
      return country1.area  < country2.area ? 1 :-1 
    }
    else if( selectSortOption.includes("Area(Asc)".toLowerCase()) ){
        return country1.area  < country2.area ? -1 :1 
      }
      
    return -1;
    console.log('Sorting');
    
  }): filterSubSelectedRegion ;
 



  function handleSort(e){
    setSelectSortOption(e.target.value);
    console.log(e.target.value);
  }



   function handleSubSelectedRegion(e) {
    
  console.log(e.target.value);
  setSubSelectedRegion(e.target.value);

}

  function capitalizeFirstLetter(inputString) {
    return (
      inputString.charAt(0).toUpperCase() + inputString.slice(1).toLowerCase()
    );
  }

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      handlingUniqueRegion(data);
      setCountryData(data);
      setLoading(false);
    }

    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="filterContainer">
        <div
          className={`inputbox-wrapper ${
            !toggleTheme && "inputbox-wrappper input::placeholder"
          } `}
          style={{ background: `${toggleTheme ? "white" : "rgb(43, 57, 69)"}` }}
        >
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="fa-magnifyingGlass"
            style={{ color: toggleTheme ? "black" : "white" }}
          />

          <input
            style={{
              background: `${toggleTheme ? "white" : "rgb(43, 57, 69)"}`,
              color: `${!toggleTheme ? "white" : "black"}`,
              "::placeholder": {
                color: `${toggleTheme ? "black" : "white"}`,
              },
            }}
            type="text"
            className="search-box"
            placeholder="Search for a country..."
            onChange={handlingInputChange}
            value={input}
          />
        </div>
        <Filter
          handleOptionChange={handleSelectedRegion}
          Option={selectedRegion}
          uniqueData={uniqueRegion}
          name="Region"
        />
        <Filter
          handleOptionChange={handleSubSelectedRegion}
          Option={subSelectedRegion}
          uniqueData={uniqueSubSelectedRegion}
          name="Sub-Region"
        />
          <Filter
          handleOptionChange={handleSort}
          Option={selectSortOption}
          uniqueData={sortedOption}
          name="Sort By "
        />
      </div>
      {loading ? (
        <div>
          <Loading />
        </div>
      ) : (
        <div className="card-container">
          {
          filterSortedOption.length !== 0 ? (
            filterSortedOption.map((curr) => {
              return(
                
                <Cards cardData={curr} />

              )
            }
           
           
            )
          
            ) : (

            <NotFound />

          )}
        </div>
      )}
    </div>
  );
};

export default MainSection;
