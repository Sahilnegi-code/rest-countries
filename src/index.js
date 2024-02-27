import React from "react";
import ReactDOM from "react-dom";
import Outing from "./Outing";
import "./index.css";
import CardDetails from "./components/Card-Details/CardDetails";
import  App from "./App";   
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider, Box , Select } from "@chakra-ui/react";

ReactDOM.render(
  <ChakraProvider>
<BrowserRouter>
<App />
</BrowserRouter>
</ChakraProvider>

, document.getElementById("root"));
