import React from 'react'
import { useState } from 'react'

function Main() {
  // useState variables
  const [counter, setCounter] = useState(0)

  // Helper Function
  let addNumFunc = () => {
    setCounter(counter + 1)
  }

  let delNumFunc = () => {
    setCounter(counter - 1)
  }
  return (
    <>
      <div className="headerheading">
        <h3 className="display-5 h-25 w-25 m-auto">Main Page</h3>
      </div>
      <div className="counter h-25 w-25 m-auto">
        <button className='btn btn-outline-dark h-25 w-50 m-auto"'>Counter: {counter}</button>
      </div>
      <div>
        <button onClick={addNumFunc} className="btn btn-outline-primary h-25 w-50 m-auto">Add Number</button>
        <button onClick={delNumFunc} className="btn btn-outline-danger h-25 w-50 m-auto" >Del Number</button>
      </div>

    </>
  )
}

export default Main