import { useState } from "react";
import { getPost } from "../../services/post";
import { PostList } from "./PostList";

export function Post(){
    const [posts,setPosts] = useState([])

    useState(async()=>{
        let post = await getPost()
        setPosts([...post])
    },[posts])
    console.log(posts)
    return posts.length?(
        <PostList data={posts}/>
    ):(<>
        <p>loading...</p>
    </>)
}