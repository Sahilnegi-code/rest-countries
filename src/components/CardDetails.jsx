import React from "react";
import { useEffect, useState, useContext } from "react";
import "./cardDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useParams, Link, useNavigate } from "react-router-dom";
import Loading from "./Loading";
import { themeContext } from "../App";

const CardDetails = () => {
  const [details, setDetails] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  const { toggleTheme, darkMode } = useContext(themeContext);
  const cardItem = ["Population", "Region", "subregion"];

  function fetchData() {
      fetch(`https://restcountries.com/v3.1/alpha/${id}`)
      .then((res) => res.json())
      .then((data) => setDetails(data));
 
    
  }

  console.log(details);
  useEffect(() => {
    fetchData();
  }, [id]);
  return (
    <>
      <div
        className="card"
        style={
          !toggleTheme
            ? darkMode.dark.cardDetailsCss
            : darkMode.light.cardDetailsCss
        }
      >
      
          <div className="container">
    
  {
          details.length ?
         <>
                 <div className="btn-left">
              <button
                className="btn"
                style={
                  !toggleTheme
                    ? darkMode.dark.cardDetailsCss.button
                    : darkMode.light.cardDetailsCss.button
                }
                onClick={() => navigate(-1)}
              >
                <FontAwesomeIcon icon={faArrowLeft} className="arrowLeft" />
                Back
              </button>
            </div>
            <div className="card-details">
              <div className="card-details-img">
                <img src={details[0].flags.svg} alt="" />
              </div>
              <div className="card-details-container">
                <h3 className="country-heading">
                  {details.length &&
                    details[0].hasOwnProperty("name") &&
                    Object.keys(details[0].name).length &&
                    details[0].name.common}
                </h3>
                <div className="card-details-body">
                  <ul>
                    {cardItem.map((item) => (
                      <li className="card-data">
                        { `${item}  : `}

                        <span className="card-value">
                          
                          {
                            (details.length &&
                            !Array.isArray(details[0][item.toLowerCase()]) &&
                            details[0][item.toLowerCase()] ) ? details[0][item.toLowerCase()] :'NA' 
                            
                            }
                        </span>
                      </li>
                    ))}
                    {
                      <>
                        <li className="card-data">
                          {
                            `Currencies  :  `
                          }
                          <span className="card-value">
                    { 
                             ( details.length &&
                              details[0] &&
                              details[0].hasOwnProperty("currencies") &&
                              Object.values(details[0]["currencies"])[0]["name" ]
                             )
                             ?
                             Object.values(details[0]["currencies"])[0]["name" ]
                             :'NA'

                            
                    }
                          </span>
                        </li>

                        <li className="card-data">
                          
                           { `Top Level Domain  : ` }
                          

                          <span className="card-value">
                            {
                             ( details.length &&
                              details[0].hasOwnProperty("tld") &&
                              details[0]["tld".toLowerCase()][0]
                             ) ? 
                             details[0]["tld".toLowerCase()][0]
                             :
                             'NA'
                            }
                          </span>

                        </li>

                        <li className="card-data">
                          
                            
                            {`Language  :`}
                            
                          
                            
                          

                          
                          { 
                           ( details.length &&  details[0].hasOwnProperty("languages") )  ?

                           
                           Object.values(details[0]["languages"]).map(
                              (curr) => (     <span className="card-value"> {curr} </span> ) )
                           
                            
                           :
                           'NA' 
                          } 
                          
                        </li>

                        <li className="card-data">
                          
                            {`Capital  :`}

                          {
                          details.length && details[0].hasOwnProperty('capital') ?
                            Object.values(details[0]["capital"]).map((curr) => (
                              <span className="card-value"> {curr} </span>
                            ))
                            :
                            'NA'
                            
                            }
                        </li>
                        <li className="card-data">
                        
                            {`Native Name  :`}

                          <span className="card-value">
                            {" "}
                            {
                            ( details[0] &&
                              details[0]["name"]["nativeName"] &&
                              details[0]["name"]["nativeName"]["eng"] &&
                              details[0]["name"]["nativeName"]["eng"]["common"] 
                            ) ? details[0]["name"]["nativeName"]["eng"]["common"] : 'NA'
                            }
                          </span>
                        </li>
                      </>
                    }
                  </ul>
                </div>
                <div className="border-countries">
                  <span className="card-data">Border Countries :</span>

                  {details[0].borders?.map((curr) => (
                    <Link to={`/country/${curr}`}>
                      <button
                        className="btn"
                        style={
                          !toggleTheme
                            ? darkMode.dark.cardDetailsCss.button
                            : darkMode.light.cardDetailsCss.button
                        }
                      >
                        {" "}
                        {curr}
                      </button>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
         </>          
     : (
          <Loading />
        
        )
}

          </div>
      
      </div>
    </>
  );
};

export default CardDetails;
