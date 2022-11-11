import React from "react";
import socketio from "socket.io-client";
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

export const socket = socketio.connect(`http://localhost:3009`, {
    withCredentials: true,
});

export const SocketContext = React.createContext(false);

export const SocketProvider = ({children})=>{
    return(
        <SocketContext.Provider value={{socket}}>
            {children}
        </SocketContext.Provider>
    )
}