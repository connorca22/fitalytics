import fitalyticsAPI from '../config/api'

//Returns the user, which we'll access the weekly_workouts and weekly_goal on. 
export async function getWeeklyWorkouts(username) {
    const response = await fitalyticsAPI.get(`/api/users/${username}`)
    return response.data
}

//Sets the weekly goal when username and weekly goal number are passed in. 
export async function setGoal(username, data) {
    const response = await fitalyticsAPI.put(`/api/users/${username}`, {weekly_goal: data.weekly_goal})
    return response.data
}