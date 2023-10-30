import axios from "axios";

const clientHttp = axios.create(
    {
        baseURL:"http://localhost:3000/",
        headers:{
          Accept:"text/plain",
          
        }
      }
)
export const useAxios = ()=>{
  const get = (url)=>{
    return clientHttp.get(url);
  } 

  const post = (url)=>{
    return clientHttp.post(url);
  }
  return{get,post};
}