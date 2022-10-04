import * as React from "react";
import { useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import FormModal from './Auth/FormModel'
import { ModalContext,ModalProvider } from "../context";
export default function ButtonAppBar(){

    const {setIsShown,setLogin,setRegister} = React.useContext(ModalContext)
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

    return (
      <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
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
              News
            </Typography>
            <Button color="inherit" onClick={loginHandler}>Login</Button>
            <Button color="inherit" onClick={registerHandler}>Register</Button>
          </Toolbar>
        </AppBar>
      </Box>

          {/* <FormModal/> */}

      </>
    );

  
}
