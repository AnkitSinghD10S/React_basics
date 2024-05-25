import "./App.css";
import { useState } from "react";
function App() {
  let [counter, setCounter] = useState(15);
  // let Counter = 5;
    const addValue = () => {
      // counter = counter + 1;
      console.log(`Value added ${counter} `, Math.random());
      if (counter<20) {
        setCounter(counter + 1);
      }
    };
  const removeValue = () => {
    if(counter>0){
      setCounter(counter - 1);
    }
  };
  return (
    <>
      <h1>Counter app</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove value{counter}</button>
      <p>footer</p>
      <footer>{counter}</footer>
    </>
  );
}

export default App;
