import React, { useState } from 'react'

const App = () => {
  let [count,setCount] = useState(0)
  
  const add=()=>{
    setCount(count+1)
  }
  const remove=()=>{
    setCount(count-1)
  }
  return (
    <div>
    <div>
      <h1>Counter</h1>
      <div>Counter is : {count}</div>
        <button onClick={add}>add</button><br /><button onClick={remove}>remove</button>
    </div>
    </div>
  )
}

export default App