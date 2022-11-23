import axios from 'axios';

const fitalyticsAPI = axios.create({
    baseURL: 'http://localhost:3000'
})

//baseURL options...
//development testing: http://localhost:3000
//deployed API: https://fitalytics-api.herokuapp.com

//includes the jwt token in authorization header before a request is sent to api.
fitalyticsAPI.interceptors.request.use((req) => {
    const token = localStorage.getItem('token');
    if(token) {
        req.headers["Authorization"] = `Bearer ${token}`
    }
    return req 
})

export default fitalyticsAPI

