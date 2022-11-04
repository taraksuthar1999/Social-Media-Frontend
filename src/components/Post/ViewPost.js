import { usePost } from "../../contexts/PostProvider";
import { Box } from "@mui/system";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Link from '@mui/joy/Link';
import { Divider, Grid } from "@mui/material";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import CommentList from "../Comment/CommentList";
import AccessTimeIcon from '@mui/icons-material/AccessTime';




export default function ViewPost(){
    const {post,comments} = usePost()
    return (
            <Grid container>
                <Grid item md={8}>
                        <Box sx={{maxWidth:'sm',margin:'25px auto',border:"1px solid rgba(0, 0, 0, 0.12)"}}>
                            <Card sx={{ boxShadow:0,borderRadius:0,padding:'15px'}}>
                                <Box mb={3}>
                                <Typography><Link color="text.primary" fontSize={'1.5em'} underline="none">{post.title}</Link></Typography>
                                </Box>
                                <Box mb={3}>
                                    <Box display={'flex'}>
                                        <Typography><Link color="text.primary" fontSize={'0.8em'} underline="none">{post.company}</Link></Typography>
                                        <Typography sx={{ '&::before':{ content:'" | @"',marginLeft:"5px",fontSize:'0.8em'}}}><Link color="text.primary" fontSize="0.8em" underline="none">{post.userName}</Link></Typography>
                                    </Box>
                                    <Box display={'flex'}>
                                        <Typography color='text.secondary'><AccessTimeIcon /></Typography>
                                        <Typography color='text.secondary'>2h</Typography>
                                    </Box>
                                </Box>
                                <Box mb={3}>
                                    <Typography justifyContent="left" variant="body2" color="text.secondary">
                                    <Link color='text.secondary'  underline="none">{post.body}</Link>
                                    </Typography>
                                </Box>
                                <Divider/>
                                <Box mt={2}>
                                    <IconButton aria-label="like">
                                        <ThumbUpOffAltIcon sx={{color:'black'}}/><Typography color='text.primary' sx={{fontSize:"0.5em"}}>{post.likes}</Typography>
                                    </IconButton>
                                    <IconButton aria-label="comment">
                                        <ChatBubbleOutlineIcon sx={{color:'black'}}/><Typography color='text.primary' sx={{fontSize:"0.5em"}}>{post.commentCount}</Typography>
                                    </IconButton>
                                </Box>
                            </Card>
                        </Box>
                        <Box sx={{ maxWidth:'sm',margin:'25px auto',border:"1px solid rgba(0, 0, 0, 0.12)",padding:"15px"}}>
                            <Typography>Add Comment</Typography>
                        </Box>
                        <Box sx={{ maxWidth:'sm',margin:'25px auto',border:"1px solid rgba(0, 0, 0, 0.12)"}}>
                            <Box sx={{padding:"15px",fontSize:"0.5em"}}>
                                <Typography>{post.commentCount} Comments</Typography>
                            </Box>
                            <Divider/>
                            <Box>
                                <CommentList comments={comments}/>
                            </Box>
                        </Box>
                </Grid>
            </Grid>
    )
           
}