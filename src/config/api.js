import axios from 'axios';

const fitalyticsAPI = axios.create({
    baseURL: 'http://localhost:3000'
})

export async function signUp(data) {
    const response = await fitalyticsAPI.post('/api/users', data)
    console.log(response.data)
    return response.data
}

// export async function signIn(data) {

// }

export default fitalyticsAPI

