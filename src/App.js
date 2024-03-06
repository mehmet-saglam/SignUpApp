import "./App.css"
import React from 'react'
import Login from "./Components/Login/Login"
import Counter  from "./Components/Counter/CounterReducer"
import Signup from "./Components/Signup/Signup"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"


function App () {
 
  return (
    <>
     <Router>
      <Routes>
        < Route path="" element={<Login />} />
        < Route path="/counter" element={<Counter />} />
        < Route path="Signup" element= { <Signup />}/>
      </Routes>
     </Router> 
    </>
  )
  
}

export default App
