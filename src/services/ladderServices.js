import fitalyticsAPI from '../config/api'

export async function getOverallLadder(data) {
    const response = await fitalyticsAPI.get('/api/ladder')
    console.log(response.data)
    return response.data
}