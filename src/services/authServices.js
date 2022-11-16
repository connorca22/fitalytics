import fitalyticsAPI from '../config/api'

export async function signUp(data) {
    const response = await fitalyticsAPI.post('/api/users', data)
    console.log(response.data)
    return response.data
}

export async function signIn(data) {
    const response = await fitalyticsAPI.post('/api/auth/login', data)
    console.log(response.data)
    return response.data
}