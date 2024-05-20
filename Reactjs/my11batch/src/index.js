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

/*const App=()=>{
    const username="mohamed";
    return(
        <div>
            <h1>{username}</h1>
            <p>Todays date::{new Date().toLocaleDateString()}</p>
        </div>
    )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<App/>)*/

//React JSX

// const myelem=<h1>Welcome to the JSX</h1>
// const r1=ReactDOM.createRoot(document.getElementById('root'))
// r1.render(myelem)

//React Without JSX

// const myelem1=React.createElement('h1',null,'welcome')
// const r2=ReactDOM.createRoot(document.getElementById('root'))
// r2.render(myelem1)

//React list

/*const Myelem=()=>{
    return(
    <>
        <ul>
            <li>list1</li>
            <li>list2</li>
            <li>list3</li>
        </ul>
    </>
    )
}
const r3=ReactDOM.createRoot(document.getElementById('root'))
r3.render(<Myelem/>)*/


// const myElement = <h1>React is {5 + 5} times better with JSX</h1>;
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(myElement);

const Myelem=()=>{
const username="mohamed";
    return(
        <div>
            <h1>welcome {username}</h1>
        </div>
    )
}

const r4=ReactDOM.createRoot(document.getElementById('root'))
r4.render(<Myelem/>)


//Conditional Rendering


