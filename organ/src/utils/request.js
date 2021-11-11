import axios from "axios"

export const organs = axios.create({
    baseURL: "http://localhost:2737"
})

organs.interceptors.request.use(function (config) {
    // Do something before request is sent
   console.log("intercepted")  
   return config;
})