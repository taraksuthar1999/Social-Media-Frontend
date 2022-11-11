import { Grid } from "@mui/material"
import { useState } from "react"
import { usePost } from "../../contexts/PostProvider"
import Comment from "./Comment"

export default function CommentList({comments}){
  let [rootComments,setRootComments] = useState(comments)
  return (
    <Grid container  display={'flex'}>
        {rootComments.map(comment=>{    
            return (<Grid item xs={12} padding="5px" key={comment.id}>
                <Comment data={comment}/>
            </Grid>)
        })}
    </Grid>
  )
}