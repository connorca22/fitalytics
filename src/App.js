import React from "react";
import GlobalStyles from "./components/styled/Global";
import Home from './components/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
        <GlobalStyles />
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
