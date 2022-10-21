import { useState } from "react";
import { getPost } from "../../services/post";
import { PostList } from "./PostList";
import * as React from "react";
import { styled } from "@mui/material/styles";
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

export default function RecipeReviewCard() {
  return (
    <Card sx={{ maxWidth: 400,boxShadow:0,borderRadius:0,borderTop:1,borderBottom:1 }}>
      <CardHeader title="Shrimp and Chorizo Paella" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label="add to favorites">
          <VisibilityIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ThumbUpOffAltIcon />
        </IconButton>
        <IconButton sx={{ marginLeft: "auto" }} aria-label="share">
          <ChatBubbleOutlineIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}