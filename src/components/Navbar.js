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



export default function Navbar(){
    const {setIsShown,setLogin,setRegister,isShown} = React.useContext(ModalContext)
    const userState = useSelector(state=>state.auth.data) ?? null
    const token = useSelector(state=>state.auth.token) ?? document?.cookie
    ?.split("; ")
    ?.find((row) => row.startsWith("token="))
    ?.split("=")[1]
    useEffect(()=>{
      if(!useState){
        //api call
      }
    })
    const min500 = useMediaQuery("(min-width:500px)")
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
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" sx={{backgroundColor:"white",color:"black",boxShadow:0,borderBottom:1}}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              NTSocial
            </Typography>
           {token?<Button color="inherit">Logout</Button>:min500&&<Box sx={{height:"30px",width:"150px"}} display="flex" justifyContent="space-between"> 
            <Button sx={{backgroundColor:"black",boxShadow:0,color:"white",fontWeight:"bold",borderRadius:0}} onClick={loginHandler}>LOG IN</Button>
            <Button sx={{backgroundColor:"red",boxShadow:0,color:"white",fontWeight:"bold",borderRadius:0}} onClick={registerHandler}>SIGN UP</Button></Box>}
          </Toolbar>
        </AppBar>
      </Box>

    </>
    );

  
}
