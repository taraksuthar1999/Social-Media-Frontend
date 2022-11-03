import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "../components/Home";
import Layout from "../components/Layout";
import RecipeReviewCard from "../components/Post/Post";
import { PostList } from "../components/Post/PostList";
import RequireAuth from "../components/RequireAuth";
import Welcome from "../components/Welcome";
import { Box } from "@mui/material";
import { PostProvider } from "../contexts/PostProvider";
import ViewPost from "../components/Post/ViewPost";


function Routing(){
  return(
    <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop:{xs:"57px",sm:"65px"}}}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/post/:id" element={<PostProvider><ViewPost/></PostProvider>} />
            <Route element={<RequireAuth />}>
              <Route path="/welcome" element={<Welcome />} />
            </Route>
          </Route>
        </Routes>
    </Box>
  );
}
export default Routing