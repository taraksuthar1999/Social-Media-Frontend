
import "./App.css";

import React from "react";
import Routes from "./routes";
import ButtonAppBar from "./components/Navbar";
import axios from "axios";


class App extends React.Component {
  render() {
    return (
      <>
        <ButtonAppBar/>
        <Routes/>
      </>
    );
  }
}
const setAuthToken =token=>{
  if(token) axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
  else delete axios.defaults.headers.common["Authorization"]
}
const token = document?.cookie
?.split("; ")
?.find((row) => row.startsWith("token="))
?.split("=")[1];
if (token) {
  setAuthToken(token);
}
export default App;
