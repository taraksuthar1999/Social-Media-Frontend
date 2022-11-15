import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "../components/Home";
import Layout from "../components/Layout";
import RecipeReviewCard from "../components/Post/Post";
import { PostList } from "../components/Post/PostList";
import RequireAuth from "../components/RequireAuth";
import Welcome from "../components/Welcome";
import { Box } from "@mui/material";
import ViewPost from "../components/Post/ViewPost";
import { SocketProvider } from "../contexts/context";

function Routing(){
  return(
    <SocketProvider>
      <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop:{xs:"57px",sm:"65px"}}}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/post/:id" element={<ViewPost/>} />
              <Route element={<RequireAuth />}>
                <Route path="/welcome" element={<Welcome />} />
              </Route>
            </Route>
          </Routes>
      </Box>
    </SocketProvider>
  );
}
export default Routing