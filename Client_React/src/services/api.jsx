import axios from "axios";

const api = axios.create({
    baseURL:"http://localhost:4000/auth"
})

export const googleAuth = (code) =>{
    const res = api.get(`/google?code=${code}`)
    return  res;
}