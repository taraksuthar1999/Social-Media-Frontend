import axios from "axios";


export const getPost = async(payload) =>{
    try {
        const {id} = payload
        const response = await axios.get(`http://localhost:3009/api/v1/post/${id}`)
        console.log(response)
        return response
      //   payload.onLoginSuccess()
      } catch (error){
        console.log(error)    
      }
}