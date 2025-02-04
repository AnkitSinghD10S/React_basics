import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// const element =(
//   <h1>hello world</h1>
// )

// const fun =()=>{
//   return <h2>helo world 2</h2>
// }

// const reactElement = React.createElement(
//   'a',
//   {href:"hhtps://google.com"},
//   "click me to vist google"
// )

// const another 

createRoot(document.getElementById('root')).render(
  <App/>
)
