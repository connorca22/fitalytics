import fitalyticsAPI from '../config/api'

export async function getWorkouts() {
    const response = await fitalyticsAPI.get('/api/workouts')
    console.log(response.data)
    return response.data
}

// export async function getWorkout() {

// }

// export async function createWorkout() {

// }

// export async function updateWorkout() {

// }

// export async function deleteWorkout() {

// }