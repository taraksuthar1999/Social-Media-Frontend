import React from "react";
export const ModalContext = React.createContext(false);
export const ModalProvider = ({children})=>{
    const [isShown,setIsShown] = React.useState(false)
    const [login,setLogin] = React.useState(false)
    const [register,setRegister] = React.useState(false)
    return(
        <ModalContext.Provider value={{isShown,login,register,setIsShown,setLogin,setRegister}}>
            {children}
        </ModalContext.Provider>
    )
}
export const PostContext = React.createContext()
export function PostProvider({children}){
    return <PostContext.Provider value={{}}>{children}</PostContext.Provider>
}
