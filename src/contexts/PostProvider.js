import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPost } from "../services/post";

const Context = React.createContext()
export const usePost = ()=>{
    return useContext(Context)
}
export function PostProvider({children}){
    const {id } = useParams()
    const [post,setPost] = useState(null)
    useEffect((id)=>{
        setPost(getPost(id))
    },[id])
    return <Context.Provider value={{post}}>{post&&children}</Context.Provider>
}