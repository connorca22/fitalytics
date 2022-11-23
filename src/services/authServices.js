import fitalyticsAPI from '../config/api'

//creates a user. Data parameter represents signup inputs (name, username, email, password, password_confirmation)
export async function signUp(data) {
    const response = await fitalyticsAPI.post('/api/users', data)
    return response.data
}

//signs in a user. data parameter represents email and and password
export async function signIn(data) {
    const response = await fitalyticsAPI.post('/api/auth/login', data)
    return response.data
}

//signs user out (deletes local storage)
export async function signOut() {
    localStorage.clear()
}

//gets and returns the user (if username is passed in)
export async function getUser(username) {
    const response = await fitalyticsAPI.get(`/api/users/${username}`)
    return response.data
}