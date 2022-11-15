import { Button, Card, Divider, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Link from "@mui/joy/Link";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ReplyIcon from '@mui/icons-material/Reply';

const dateFormatter = new Intl.DateTimeFormat(undefined,{
    dateStyle:'medium',
    timeStyle:'short'
})

export default function Comment({data}){
    return(
       <Card sx={{ boxShadow:0,borderRadius:0,padding:'5px'}}>
            <Box display={'flex'} mb={0}>
                <Typography><Link color="text.primary" fontSize={'0.6em'} underline="none">{data.user[0].company}</Link></Typography>
                <Typography sx={{ '&::before':{ content:'" | @"',marginLeft:"5px",fontSize:'0.6em'}}}><Link color="text.primary" fontSize="0.6em" underline="none">{data.user[0].userName}</Link></Typography>
            </Box>
            <Box>
                <Typography justifyContent="left" variant="body2" color="text.secondary">
                <Link color='text.secondary'  underline="none">{data.message}</Link>
                </Typography>
            </Box>
            <Box display={"flex"}>
                <Box>
                    <IconButton aria-label="like">
                        <ThumbUpOffAltIcon sx={{color:'black',fontSize:'0.8em'}}/><Typography color='text.primary' sx={{fontSize:"0.5em"}}>{8}</Typography>
                    </IconButton>
                    <IconButton aria-label="reply">
                        <ReplyIcon sx={{color:'black',fontSize:'0.8em'}}/>
                    </IconButton>
                </Box>
                <IconButton>
                    <Typography color='text.primary' sx={{fontSize:"0.5em"}}>{dateFormatter.format(Date.parse(data?.createdAt))}</Typography>
                </IconButton>
            </Box>
       </Card>
    )
}