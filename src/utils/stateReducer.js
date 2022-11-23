export default function reducer(state, action) {
    //reducer that updates the username and token of current logged in user in global state. 
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