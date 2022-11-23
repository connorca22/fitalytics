import fitalyticsAPI from '../config/api'

//Gets all workouts belonging to authorized user 
export async function getWorkouts() {
    const response = await fitalyticsAPI.get('/api/workouts')
    return response.data
}

//gets a specific workout when passed a workout id 
export async function getWorkout(id) {
    const response = await fitalyticsAPI.get(`/api/workouts/${id}`)
    return response.data
}

//creates a workout when passed relevant workout data 
export async function createWorkout(data) {
    const response = await fitalyticsAPI.post('/api/workouts', data)
    return response.data
}

//updates an existing workout when passed updated fields. 
export async function updateWorkout(data) {
    const response = await fitalyticsAPI.put(`/api/workouts/${data.id}`, data)
    return response.data
}

//deletes a workout when passed a workout id. 
export async function deleteWorkout(id) {
    const response = await fitalyticsAPI.delete(`/api/workouts/${id}`)
    return response.data
}