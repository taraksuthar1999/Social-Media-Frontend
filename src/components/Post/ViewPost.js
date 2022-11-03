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



export default function ViewPost(){
    const {post} = usePost()
    console.log(post)
    return (
            <Grid container>
                <Grid item md={8}>
                        <Box sx={{maxWidth:'sm',margin:'25px auto',border:"1px solid rgba(0, 0, 0, 0.12)"}}>
                            <Card sx={{ boxShadow:0,borderRadius:0,padding:'15px'}}>
                                <Box mb={3}>
                                <Typography><Link color="text.primary" fontSize={'1.5em'} underline="none">{post.title}</Link></Typography>
                                </Box>
                                <Box mb={3}>
                                    <Typography justifyContent="left" variant="body2" color="text.secondary">
                                    <Link color='text.secondary'  underline="none">{post.body}</Link>
                                    </Typography>
                                </Box>
                                <Divider/>
                                <Box mt={2}>
                                    <IconButton aria-label="like">
                                        <ThumbUpOffAltIcon sx={{color:'black'}}/><Typography color='text.primary' sx={{fontSize:"0.5em"}}>1</Typography>
                                    </IconButton>
                                    <IconButton aria-label="comment">
                                        <ChatBubbleOutlineIcon sx={{color:'black'}}/><Typography color='text.primary' sx={{fontSize:"0.5em"}}>1</Typography>
                                    </IconButton>
                                </Box>
                            </Card>
                        </Box>
                        <Box sx={{ maxWidth:'sm',margin:'25px auto',border:"1px solid rgba(0, 0, 0, 0.12)"}}>
                            <h1>Add Comment</h1>
                        </Box>
                        <Box sx={{ maxWidth:'sm',margin:'25px auto',border:"1px solid rgba(0, 0, 0, 0.12)"}}>
                            <h1>Comments</h1>
                        </Box>
                </Grid>
            </Grid>
    )
           
}