import axios from "axios"
export const commentAdd = async(payload) =>{
    try {
        const {message,parentId} = payload
        const response = await axios
            .post(`http://localhost:3009/api/v1/comment/add`,{message,parentId})
        return response
      } catch (error){
        console.log(error)    
      }
}