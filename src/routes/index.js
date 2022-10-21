import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "../components/Home";
import Layout from "../components/Layout";
import RecipeReviewCard from "../components/Post/Post";
import { PostList } from "../components/Post/PostList";
import RequireAuth from "../components/RequireAuth";
import Welcome from "../components/Welcome";
function Routing(){
  return(
    <div className="container">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/posts' element={<PostList/>} />
            <Route path='/post' element={<RecipeReviewCard/>} />
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