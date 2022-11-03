
import "./App.css";

import React, { useEffect,useState } from "react";
import Routes from "./routes";
import Navbar from "./components/Navbar";
import axios from "axios";
import { Box } from "@mui/material";
import { BrowserRouter as Router } from "react-router-dom";
import Cookies from "js-cookie";
import FromModal from "./components/Auth/FormModel";



function App(props){

    return (
      <Box sx={{ display: 'flex' }}>
        <Router>
          <Navbar/>
          <Routes/>
          <FromModal/>
        </Router>
      </Box> 
    );

}
export const setAuthToken =token=>{
  console.log(token,'set')
  if(token) axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
  else delete axios.defaults.headers.common["Authorization"]
}
const token = Cookies.get('token')
if(token) setAuthToken(token);
export default App;
