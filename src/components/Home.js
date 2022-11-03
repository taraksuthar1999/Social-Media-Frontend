import { ThemeProvider } from "@emotion/react";
import React, { useEffect, useState } from "react";
import ButtonAppBar from "./Navbar";
import FormModal from "./Auth/FormModel";
import { Button } from "@mui/material";
import SideBar from "./SideBar";
import {Grid} from "@mui/material";
import Box from "@mui/material/Box";
import Post from "./Post/Post";
import {useMediaQuery} from "@mui/material";
import post, { getPosts } from "../services/post";

function Home(props){

   const min600 = useMediaQuery("(min-width:600px)")
   const [posts,setPosts] = useState([])

   useEffect(()=>{
      const posts = getPosts()
      console.log(posts)
      setPosts(posts)
   },[])

    return (
      <Box>
        <Grid container sx={{borderLeft:"1px solid rgba(0, 0, 0, 0.12)",borderTop:"1px solid rgba(0, 0, 0, 0.12)"}}>
          {posts.map((post)=><Grid item key={post.id}  sm={6} md={6} sx={{borderBottom:"1px solid rgba(0, 0, 0, 0.12)",borderRight:"1px solid rgba(0, 0, 0, 0.12)"}}>
              <Post data={post} />
            </Grid>)
          } 
        </Grid>
        {/* <FormModal/> */}
      </Box>
      
    );
  
}

export default Home;
