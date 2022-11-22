import fitalyticsAPI from '../config/api'

export async function getWeeklyWorkouts(username) {
    const response = await fitalyticsAPI.get(`/api/users/${username}`)
    return response.data
}


export async function setGoal(username, data) {
    const response = await fitalyticsAPI.put(`/api/users/${username}`, {weekly_goal: data.weekly_goal})
    return response.data
}