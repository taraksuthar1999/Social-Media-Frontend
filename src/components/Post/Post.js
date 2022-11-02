import { useState } from "react";
import { getPost } from "../../services/post";
import { PostList } from "./PostList";
import * as React from "react";
import Link from '@mui/joy/Link';
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

export default function Post({data}) {
  const divider = <Divider/>
  return (
    <Card sx={{ maxWidth:'sm',boxShadow:0,borderRadius:0,padding:'15px'}}>
      <CardHeader title={data.title.length>30?data.title?.slice(0,40)+'...':data.title} subheader={<Typography><Link color='text.secondary'  underline="none">{data.tag}</Link></Typography>} />
      <CardContent sx={{padding:0}} >
       <IconButton sx={{textAlign:'left'}} aria-label="content">
        <Typography justifyContent="left" variant="body2" color="text.secondary">
          {data.body?.slice(0,150)+'...'}
        </Typography>
       </IconButton>
      </CardContent>
      <CardActions sx={{display:'block', margin:0}}>
        <Box display={'flex'} mb="5px">
            <Typography><Link color="text.primary" fontSize={'0.8em'} underline="none">{data.company}</Link></Typography>
            <Typography sx={{ '&::before':{ content:'" | @"',marginLeft:"5px",fontSize:'0.8em'}}}><Link color="text.primary" fontSize="0.8em" underline="none">{data.userName}</Link></Typography>
        </Box>
        <Box marginLeft={0}>
          <IconButton aria-label="read">
            <VisibilityIcon /><Typography sx={{fontSize:"0.5em"}}>{data.reads}</Typography>
          </IconButton>
          <IconButton aria-label="like">
            <ThumbUpOffAltIcon /><Typography sx={{fontSize:"0.5em"}}>{data.likes}</Typography>
          </IconButton>
          <IconButton  sx={{ marginLeft: "auto" }} aria-label="comment">
            <ChatBubbleOutlineIcon /><Typography sx={{fontSize:"0.5em"}}>{data.comments}</Typography>
          </IconButton>
          <IconButton>
            <Typography><Link color="text.primary" fontSize={'0.8em'} underline="none">2h</Link></Typography>
          </IconButton>
        </Box>
      </CardActions>
    </Card>
  );
}