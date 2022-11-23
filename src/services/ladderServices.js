import fitalyticsAPI from '../config/api'

//returns list of users in order of ranking. 
export async function getOverallLadder(data) {
    const response = await fitalyticsAPI.get('/api/ladder')
    return response.data
}