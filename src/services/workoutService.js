import fitalyticsAPI from '../config/api'

export async function getWorkouts() {
    const response = await fitalyticsAPI.get('/api/workouts')
    console.log(response.data)
    return response.data
}

export async function getWorkout(id) {
    const response = await fitalyticsAPI.get(`/api/workouts/${id}`)
    console.log(response.data)
    return response.data
}

export async function createWorkout(data) {
    const response = await fitalyticsAPI.post('/api/workouts', data)
    return response.data
}

export async function updateWorkout(data) {
    const response = await fitalyticsAPI.put(`/api/workouts/${data.id}`, data)
    return response.data
}

export async function deleteWorkout(id) {
    const response = await fitalyticsAPI.delete(`/api/workouts/${id}`)
    return response.data
}