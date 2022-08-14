import logo from "./logo.svg";
import "./App.css";

import { Navigate, Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import React from "react";
import Home from "./components/Home";
import Loading from "./utils/Loading";
import Layout from "./components/Layout";
import RequireAuth from "./components/RequireAuth";
import Welcome from "./components/Welcome";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route element={<RequireAuth />}>
                <Route path="/welcome" element={<Welcome />} />
              </Route>
            </Route>
          </Routes>
        </Router>
      </div>
    );
  }
}
export default App;
