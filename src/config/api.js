import axios from 'axios';

const fitalyticsAPI = axios.create({
    baseURL: 'http://localhost:3000'
})

export default fitalyticsAPI

