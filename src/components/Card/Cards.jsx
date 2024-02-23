import React, { useContext } from "react";
import "./card.css";
import { themeContext } from "../../App";
const Cards = ({ cardData }) => {
  const { darkMode, setToggleTheme, toggleTheme } = useContext(themeContext);
// console.log(cardData)
  return (
    <div
      className="card-wrapper"
      style={{ color: `${!toggleTheme ? "white" : "black"}` }}
    >
      <div className="img-container">
        <img src={cardData.flags.png} alt="" />
      </div>

      <div
        className="card-description"
        style={{
          backgroundColor: `${toggleTheme ? "white" : "rgb(43, 57, 69)"}`,
        }}
      >
        <h3 className="card-title">{cardData.name.common} </h3>
        <p p className="card-data">
          {" "}
          Population <span className="card-value">
            {" "}
            {cardData.population}{" "}
          </span>{" "}
        </p>
        <p className="card-data">
          Region : <span className="card-value">{cardData.region}</span>
        </p>
        <p className="card-data">
          Capital : <span className="card-value">{cardData.capital}</span>
        </p>
      </div>
    </div>
  );
};

export default Cards;
