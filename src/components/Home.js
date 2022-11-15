import { ThemeProvider } from "@emotion/react";
import React, { useEffect, useState } from "react";
import ButtonAppBar from "./Navbar";
import FormModal from "./Auth/FormModel";
import { Button } from "@mui/material";
import SideBar from "./SideBar";
import {Grid} from "@mui/material";
import Box from "@mui/material/Box";
import Post from "./Post/Post";
import { SocketProvider } from "../contexts/context";
import { connect, useDispatch, useSelector } from "react-redux";
import {actions} from "../store/post/actions";

function Home(props){
   useEffect(()=>{
      props.getPosts({tag:"All"})
   },[])

    return (
      <Box>
        <Grid container sx={{borderLeft:"1px solid rgba(0, 0, 0, 0.12)",borderTop:"1px solid rgba(0, 0, 0, 0.12)"}}>
          {props.posts && props.posts.map((post)=><Grid item key={post._id}  sm={6} md={6} sx={{borderBottom:"1px solid rgba(0, 0, 0, 0.12)",borderRight:"1px solid rgba(0, 0, 0, 0.12)"}}>
              <Post data={post} />
            </Grid>)
          } 
        </Grid>
      </Box>
    );
  
}
const getPosts = actions.getPosts;
const ConnectedHome = connect((state) => state.post, { getPosts })(Home );
export default ConnectedHome;
