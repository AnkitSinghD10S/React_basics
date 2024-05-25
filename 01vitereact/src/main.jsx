// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// function MyApp() {
//     return(
//         <div>
//             <h1>Custom app ? </h1>
//         </div>
//     )
// }
// const ReactElement = {
//     type: "a",
//     props: {
//       href: "https://google.com",
//       target: "_blank",
//     },
//     Children: "Click me to visit google",
//   };

//   const anotherElement = (
//     <a href="http://google.com" target='_blank'>
//         Vist google
//     </a>
//   )

    // const anotheruser="react";

//   const ReactElement= React.createElement(
//     'a',
//     {href:"https://google.com",target:"_blank"},
//     'click me to visit google',
//     anotheruser
//   )
ReactDOM.createRoot(document.getElementById('root')).render(
    // ReactElement
    <App/>
)
