import fitalyticsAPI from '../config/api'

export async function signUp(data) {
    const response = await fitalyticsAPI.post('/api/users', data)
    return response.data
}

export async function signIn(data) {
    const response = await fitalyticsAPI.post('/api/auth/login', data)
    return response.data
}

export async function signOut() {
    localStorage.clear()
}

export async function getUser(username) {
    const response = await fitalyticsAPI.get(`/api/users/${username}`)
    return response.data
}