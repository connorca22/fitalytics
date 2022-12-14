import React from "react";
import GlobalStyles from "./components/styled/Global";
import SharedLayout from "./components/SharedLayout";
import Home from './components/Home'
import SignUp from './components/SignUp' 
import SignIn from "./components/SignIn"
import Dashboard from "./components/Dashboard"
import Error from "./components/Error"
import ProtectedRoute from "./components/ProtectedRoute";
import AddWorkout from './components/AddWorkout'
import Workout from "./components/Workout";
import UpdateWorkout from "./components/UpdateWorkout";
import Ladder from "./components/Ladder";
import UpdateGoal from "./components/UpdateGoal";
import {useReducer} from 'react'
import stateReducer from './utils/stateReducer'
import {StateContext} from './utils/stateContext'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

//initial state contains the current user's username and authtoken 
  const initialState = {
    currentUser: localStorage.getItem('username') || null,
    authToken: {token: localStorage.getItem('token') || null}
  }

//sets up our reducer and initial global state. 
  const [store, dispatch] = useReducer(stateReducer, initialState)

//gives all of our routes access to our global state.
//sets up global styles 
//Sets up all routes
  return (
    <StateContext.Provider value={{store, dispatch}}>
      <Router>
          <GlobalStyles />
        <Routes>
          <Route path='/' element={<SharedLayout />}>
            <Route index element={<Home />}></Route>
            <Route path='sign-up' element={< SignUp />} />
            <Route path='sign-in' element={< SignIn />} /> 
            <Route path="*" element={<Error/>} />
            <Route path='dashboard/*' element={
              <ProtectedRoute>
                <Routes>
                    <Route index element={<Dashboard/>}></Route>
                    <Route path="/:workoutId" element={ <Workout />} />
                    <Route path="/update/:workoutId" element={ <UpdateWorkout />} />
                    <Route path='add-workout' element={<AddWorkout />}></Route>
                    <Route path='ladder' element={<Ladder />}></Route>
                    <Route path='update-goal' element={<UpdateGoal />}></Route>
                    <Route path="*" element={ < Error/>} />
                </Routes>
              </ProtectedRoute>
            }>
            </Route>
            
          </Route>
        </Routes>
      </Router>
    </StateContext.Provider>
  );
}
  
  export default App;

