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

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  const user = {
    loggedIn: true,
    user_id: 5454
  }

  return (
    <Router>
        <GlobalStyles />
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />}></Route>
          <Route path='sign-up' element={< SignUp />} />
          <Route path='sign-in' element={< SignIn />} /> 
          <Route path="*" element={<Error/>} />
          <Route path='dashboard/*' element={
            <ProtectedRoute user={user}>
              <Routes>
                  <Route index element={<Dashboard user={user}/>}></Route>
                  <Route path='add-workout' element={<AddWorkout />}></Route>
                  <Route path="*" element={ < Error/>} />
              </Routes>
            </ProtectedRoute>
          }>
          </Route>
          
        </Route>
      </Routes>
    </Router>
  );
  }
  
  export default App;




  // return (
  //   <Router>
  //       <GlobalStyles />
  //     <Routes>
  //       <Route path='/' element={<SharedLayout />}>
  //         <Route index element={<Home />}></Route>
  //         <Route path='sign-up' element={< SignUp />} />
  //         <Route path='sign-in' element={< SignIn />} /> 
  //         <Route path='*' element={
  //           <ProtectedRoute user={user}>
  //             <Routes>
  //               <Route path='dashboard' element={ <Dashboard user={user} />} /> 
  //             </Routes>
  //           </ProtectedRoute>
  //         }>
  //         </Route>
  //         <Route path="*" element={ < Error/>} />
  //       </Route>
  //     </Routes>
  //   </Router>
  // );
  // }
  
  // export default App;






