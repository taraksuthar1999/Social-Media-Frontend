import { useState } from "react";
import { getPost } from "../../services/post";
import { PostList } from "./PostList";
import * as React from "react";
import Link from '@mui/joy/Link';
import { Link as RouterLink } from 'react-router-dom'
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { Box } from "@mui/system";
import { fontSize } from "@mui/system";
import { Divider } from "@mui/material";
import io from 'socket.io-client'
import { useEffect } from "react";
import { resolveTo } from "@remix-run/router";
import { SocketContext } from "../../context";

export default function Post({data}) {
  const {socket} = React.useContext(SocketContext);
   
  function likeHandler(postId){
      socket.emit('like',"636e0b59c7b6f19eab8cb58b",(res)=>{
        console.log(res)
      })
  }
  return (
    <Card sx={{ maxWidth:'sm',boxShadow:0,borderRadius:0,padding:'15px'}}>
      <Box>
          <Link component={RouterLink}  to={'/'}  underline="none">
            <Typography fontSize={'0.8em'} color="text.secondary">
              {data.tag}
            </Typography>
          </Link>
      </Box>
      <Box mb={3}>
      <Link  underline="none" component={RouterLink} to={'/post/'+data.id}><Typography fontWeight={'bold'} fontSize={'1.2em'} color="text.primary">{data.title.length>50?data.title?.slice(0,50)+'...':data.title}</Typography></Link>
      </Box>
      <Box mb={3}>
          <Link color='text.secondary'  underline="none" component={RouterLink} to={'/post/'+data.id}>
            <Typography justifyContent="left" variant="body2" color="text.secondary">
                {data.body?.slice(0,150)+'...'}
            </Typography>
          </Link>
      </Box>
      <Box >
        <Box display={'flex'}>
            <Typography><Link color="text.primary" fontSize={'0.8em'} underline="none">{data.company}</Link></Typography>
            <Typography sx={{ '&::before':{ content:'" | @"',marginLeft:"5px",fontSize:'0.8em'}}}><Link color="text.primary" fontSize="0.8em" underline="none">{data.userName}</Link></Typography>
        </Box>
        <Box>
          <IconButton aria-label="read">
            <VisibilityIcon sx={{color:'black'}} fontSize="small" /><Typography color='text.primary' sx={{fontSize:"0.5em"}}>{data.reads}</Typography>
          </IconButton>
          <IconButton aria-label="like" onClick={()=>likeHandler(data.id)}>
            <ThumbUpOffAltIcon sx={{color:'black'}} fontSize="small" /><Typography color='text.primary' sx={{fontSize:"0.5em"}}>{data.likes}</Typography>
          </IconButton>
          <IconButton aria-label="comment">
            <ChatBubbleOutlineIcon sx={{color:'black'}} fontSize="small" /><Typography color='text.primary' sx={{fontSize:"0.5em"}}>{data.comments}</Typography>
          </IconButton>
          <IconButton>
            <Typography sx={{fontSize:"0.5em"}}>2h</Typography>
          </IconButton>
        </Box>
      </Box>
    </Card>
  );
}