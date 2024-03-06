import React, { useReducer } from 'react'
import "./counter.css"
import { useLocation } from 'react-router-dom';


function reducer(state, action) {
  switch (action.type) {
    case "inc":
      return state + 3;
    case "dec":
      return state - 2;
    case "reset":
      return 0;
    default:
      return state;
  }
}

export default function CounterReducer(props) {
  const location = useLocation();
  console.log(location)
  const [count, dispatch] = useReducer(reducer, 0)

  function inc() {
    dispatch({ type: "inc" })
  }
  function dec() {
    dispatch({ type: "dec" })
  }
  function reset() {
    dispatch({ type: "reset" })
  }

  return (
    <>
      <h1>Hosgeldin {location.state?.name} </h1>
      <div>
        <div className='container'>
          <button className='submit' onClick={inc}> Arttir </button>
          <h1>{count} </h1>
          <button className='submit' onClick={dec}> Azalt  </button>
          <button className='submit' onClick={reset}> Reset  </button>
        </div>
      </div>
    </>
  )

}



