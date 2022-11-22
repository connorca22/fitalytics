import axios from 'axios';

const fitalyticsAPI = axios.create({
    baseURL: 'http://localhost:3000'
})

//http://localhost:3000
//https://fitalytics-api.herokuapp.com

fitalyticsAPI.interceptors.request.use((req) => {
    const token = localStorage.getItem('token');
    if(token) {
        req.headers["Authorization"] = `Bearer ${token}`
    }
    return req 
})

export default fitalyticsAPI

