export default function reducer(state, action) {
    switch(action.type) {
        case 'setUsername':{
            return {
                ...state,
                currentUser: action.data
            }
        }
        case 'setToken':{
            return {
                ...state,
                authToken: {
                    token: action.data
                }
            }
        }
        default: return state
    }
}