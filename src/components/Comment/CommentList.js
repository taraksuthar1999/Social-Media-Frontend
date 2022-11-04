import { Grid } from "@mui/material"
import { usePost } from "../../contexts/PostProvider"
import Comment from "./Comment"

export default function CommentList({comments}){
  return (
    <Grid container sm={12} display={'flex'}>
        {comments.map(comment=>{    
            return (<Grid item xs={12} padding="5px" key={comment.id}>
                <Comment data={comment}/>
            </Grid>)
        })}
    </Grid>
  )
}