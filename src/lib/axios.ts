import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:8080/api",
})

const publicUrls = [
    "/auth/login",
    "/auth/register",
    "/auth/forgot-password",
    "/product/top-selling"
]

axiosInstance.interceptors.request.use((config) => {


    const isPublicRoute = publicUrls.some(url => config.url?.includes(url));
    if (!isPublicRoute) {
        const token = localStorage.getItem("authToken");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
    }

    return config;
}, error => {
    return Promise.reject(error);
});

axiosInstance.interceptors.response.use((response )=> {
    return response;
}, async (error )=>{
    if(error ){
          console.log("Unauthorized, handling token refresh or logout");
        localStorage.removeItem("authToken")
    } return Promise.reject(error);
})
export default axiosInstance;