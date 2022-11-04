import { Card, Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Link from "@mui/joy/Link";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ReplyIcon from '@mui/icons-material/Reply';

export default function Comment({data}){
    return(
       <Card sx={{ boxShadow:0,borderRadius:0,padding:'5px'}}>
            <Box display={'flex'} mb={2}>
                <Typography><Link color="text.primary" fontSize={'0.6em'} underline="none">{data.company}</Link></Typography>
                <Typography sx={{ '&::before':{ content:'" | @"',marginLeft:"5px",fontSize:'0.6em'}}}><Link color="text.primary" fontSize="0.6em" underline="none">{data.userName}</Link></Typography>
            </Box>
            <Box>
                <Typography justifyContent="left" variant="body2" color="text.secondary">
                <Link color='text.secondary'  underline="none">{data.message}</Link>
                </Typography>
            </Box>
            <Box>
                <IconButton aria-label="like">
                    <ThumbUpOffAltIcon sx={{color:'black',fontSize:'0.8em'}}/><Typography color='text.primary' sx={{fontSize:"0.5em"}}>{data.likes}</Typography>
                </IconButton>
                <IconButton aria-label="like">
                    <ReplyIcon sx={{color:'black',fontSize:'0.8em'}}/><Typography color='text.primary' sx={{fontSize:"0.5em"}}>{data.replies}</Typography>
                </IconButton>
            </Box>
       </Card>
    )
}