import axios from 'axios';

const fitalyticsAPI = axios.create({
    baseURL: 'https://fitalytics-api.herokuapp.com'
})

fitalyticsAPI.interceptors.request.use((req) => {
    const token = localStorage.getItem('token');
    if(token) {
        req.headers["Authorization"] = `Bearer ${token}`
    }
    console.log(req.headers)
    return req 
})

export default fitalyticsAPI

