import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "../components/Home";
import Layout from "../components/Layout";
import RequireAuth from "../components/RequireAuth";
import Welcome from "../components/Welcome";
function Routing(){
  return(
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route element={<RequireAuth />}>
              <Route path="/welcome" element={<Welcome />} />
            </Route>
            <Route path="/tarak" element={ <><h1>Tarak</h1></>}/>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}
export default Routing