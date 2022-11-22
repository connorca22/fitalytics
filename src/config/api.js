import axios from 'axios';

const fitalyticsAPI = axios.create({
    baseURL: 'https://fitalytics-api.herokuapp.com'
})

//http://localhost:3000

fitalyticsAPI.interceptors.request.use((req) => {
    const token = localStorage.getItem('token');
    if(token) {
        req.headers["Authorization"] = `Bearer ${token}`
    }
    return req 
})

export default fitalyticsAPI

