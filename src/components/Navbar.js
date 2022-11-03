import * as React from "react"; 
import { useEffect,useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import FormModal from './Auth/FormModel'
import { ModalContext,ModalProvider } from "../context";
import { useSelector } from "react-redux";
import { authSaga } from "../store/auth/saga";
import { useSelect } from "@mui/base";
import Button from "@mui/material/Button";
import { width } from "@mui/system";
import { useMediaQuery } from "@mui/material";
import NavbarButtons from "./NavbarButtons";
import NavbarProfile from "./NavbarProfile";
import SideBar from "./SideBar";



export default function Navbar(){
    const {setIsShown,setLogin,setRegister,isShown} = React.useContext(ModalContext)  
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const userState = useSelector(state=>state.auth.data) ?? null

    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };
    const token = useSelector(state=>state.auth.token) ?? document?.cookie
    ?.split("; ")
    ?.find((row) => row.startsWith("token="))
    ?.split("=")[1]
    useEffect(()=>{
      if(!useState){
        //api call
      }
    })
    const min600 = useMediaQuery("(min-width:600px)")
    const max600 = useMediaQuery("(max-width:600px)")
    const loginHandler=()=>{
      setIsShown(true)
      setLogin(true)
      setRegister(false)
    }
    const registerHandler=()=>{
      setIsShown(true)
      setRegister(true)
      setLogin(false)
    }
    const logoutHandler=()=>{

    }

    return (
      <>
      
        <AppBar position="fixed" sx={{height:"calc(100vh-70px)", backgroundColor:"white",color:"black",boxShadow:0,borderBottom:"1px solid rgba(0, 0, 0, 0.12)",zIndex: (theme) => theme.zIndex.drawer + 1}}>
          <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <img src="" />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              NTSocial
            </Typography>
           {min600&&(token?<NavbarProfile/>:<NavbarButtons/>)  }
          </Toolbar>
        </AppBar>
      <SideBar token={token} mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle}/>
    </>
    );  

  
}
