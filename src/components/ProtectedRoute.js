import {Navigate} from 'react-router-dom'
import { useGlobalState } from '../utils/stateContext'


//Used to wrap dashboard routes (details in routes in App.js)
const ProtectedRoute = ({children, user}) => {
  const {store} = useGlobalState();
  const {currentUser, authToken} = store;
    
  if(!currentUser || !authToken.token) {
    console.log('working')
    return <Navigate to="/sign-in" />
  }
  return children
}

export default ProtectedRoute;





