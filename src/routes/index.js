import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "../components/Home";
import Layout from "../components/Layout";
import RecipeReviewCard from "../components/Post/Post";
import { PostList } from "../components/Post/PostList";
import RequireAuth from "../components/RequireAuth";
import Welcome from "../components/Welcome";
import { Box } from "@mui/material";
const drawerWidth = 240;


function Routing(){
  return(
      // <Router>
    <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop:{xs:"57px",sm:"65px"}}}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route element={<RequireAuth />}>
              <Route path="/welcome" element={<Welcome />} />
            </Route>
          </Route>
        </Routes>
    </Box>
      // </Router>
  );
}
export default Routing