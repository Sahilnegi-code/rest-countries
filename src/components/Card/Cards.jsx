import React, { useContext } from "react";
import "./card.css";
import { Card, CardHeader, CardBody, CardFooter, Heading, Text , Image } from '@chakra-ui/react'
import { themeContext } from "../../App";




const Cards = ({ cardData }) => {
  const { darkMode, setToggleTheme, toggleTheme } = useContext(themeContext);
  return (
    <Card
      boxShadow={"4px 9px 33px -23px rgba(0, 0, 0, 0.83)"}
      marginBottom={"8rem"}
      maxHeight={"400px"}
      maxWidth={"400px"}
      style={{ color: `${!toggleTheme ? "white" : "black"}` }}
    >

      <Card  width="100%"  height="225px">
        <Image src={cardData.flags.png}  height={"225px"} width={'100%'} />
      </Card>
      
      <CardBody
        textDecoration={"none"}
        padding={"4rem"}
        style={{
          backgroundColor: `${toggleTheme ? "white" : "rgb(43, 57, 69)"}`,
        }}
      >
      <Heading  fontSize={'1.7rem'} fontWeight={'800'} marginBottom={'6px'}>
        {cardData.name.common}
      </Heading>
   
        <Text  fontSize={'1.2rem'} fontWeight={'700'} marginBottom= {'0.3rem'}>
          {" "}
          Population <span fontSize={"1.2rem"} fontWeight={'500'} >
            {" "}
            {cardData.population}{" "}
          </span>{" "}
        </Text>

        <Text  fontSize={'1.2rem'} fontWeight={'700'} marginBottom= {'0.3rem'} >
          Region : <span  fontSize={"1.2rem"} fontWeight={'500'}  >{cardData.region}</span>
        </Text>


        <Text fontSize={'1.2rem'} fontWeight={'700'} marginBottom= {'0.3rem'}>
          Capital : <span fontSize={"1.2rem"} fontWeight={'500'} >{cardData.capital}</span>
        </Text>



      </CardBody>




    </Card>
  );
};

export default Cards;
