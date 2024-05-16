import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
/*const Sample=()=>{

   return(
    <div>
        <h1>hello world</h1>
    </div>
    
   )
}

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>)*/

//Basic Rendering

/*const App=()=>{
    return(
        <div>
            <h1>hello world</h1>
            <p>Welcome</p>
        </div>
    )
}
const r1=document.getElementById('root')
const r2=ReactDOM.createRoot(r1)
r2.render(<App/>)*/


//Dynamic Rendering

const App=()=>{
    const username="mohamed";
    return(
        <div>
            <h1>{username}</h1>
            <p>Todays date::{new Date().toLocaleDateString()}</p>
        </div>
    )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<App/>)