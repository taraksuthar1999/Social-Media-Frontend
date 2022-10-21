import { SideBarLink } from "./SideBarLink";
import { Box } from "@mui/system";
import { Button } from "@mui/material";


export default function SideBar(){
    return(
        <div className="Sidebar">
            <SideBarLink text='Home'/>
            <SideBarLink text='Home'/>
            <Box sx={{height:"30px",width:"150px"}} display="flex" justifyContent="space-between"> 
            <Button sx={{backgroundColor:"black",boxShadow:0,color:"white",fontWeight:"bold",borderRadius:0}} >LOG IN</Button>
            <Button sx={{backgroundColor:"red",boxShadow:0,color:"white",fontWeight:"bold",borderRadius:0}} >SIGN UP</Button></Box>
            <SideBarLink text='Home'/>
            <SideBarLink text='Home'/>
            <SideBarLink text='Home'/>
            <SideBarLink text='Home'/>
            <SideBarLink text='Home'/>
            <SideBarLink text='Home'/>
        </div>
    )
}