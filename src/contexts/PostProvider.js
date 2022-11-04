import React, { useContext, useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { getPost } from "../services/post";

const Context = React.createContext()
export const usePost = ()=>{
    return useContext(Context)
}
export function PostProvider({children}){
    const {id } = useParams()
    const [post,setPost] = useState(null)
    const getCommentsById = useMemo(()=>{
        if(post?.comments==null) return []
        const group = {} 
        post.comments.forEach(comment => {
            group[comment.parentId] ||= []
            group[comment.parentId].push(comment)
        });
        return group
    },[post?.comments])
    function getReplies(parentId){
        return getCommentsById[parentId]    
    }
    useEffect((id)=>{
        setPost(getPost(id))
    },[id])
    return <Context.Provider value={{post,getReplies,comments:getCommentsById[null]}}>{post&&children}</Context.Provider>
}