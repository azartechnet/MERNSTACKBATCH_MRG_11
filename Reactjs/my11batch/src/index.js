import React from 'react'
import ReactDOM from 'react-dom/client'
// import './index.css';
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

/*const Myelem=()=>{
const username="mohamed";
    return(
        <div>
            <h1>welcome {username}</h1>
        </div>
    )
}

const r4=ReactDOM.createRoot(document.getElementById('root'))
r4.render(<Myelem/>)*/

//React Example

/*const App=()=>{
    return(
        <div className='s1'>
            <h1>React is {5 + 5} times better with JSX</h1>;

        </div>
    )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))

r1.render(<App/>)*/

//Conditional Rendering

/*const x=10
let text=""
if(x>10){
    text="goodbye"
}
else if(x==10)
{
    text="ten"
}
else
{
    text="x is less than 10"
}
const Myelem=()=>{
    return(
        <div>
            <h1>Hello{text}</h1>
        </div>
    )
}

const r2=ReactDOM.createRoot(document.getElementById('root'))
r2.render(<Myelem/>)*/

//React class component

/*class Sample extends React.Component
{
    render()
    {
        return(
            <div>
                <h1>Welcome to the class compoent</h1>
            </div>
        )
    }
}*/

//Function component with props

/*function Sample(props)
{
    return(
        <>
          <h1>Welcome to function Component</h1>
          <p>{props.name}</p>
          <p>{props.age}</p>
        </>
    )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample name={"mohamed"} age={34}/>)*/

//Component in Component

/*function Sample() {
    return (
        <>
            <h2>I am a Sample!</h2>
        </>

    )
  }
  function Azar() {
    return (
      <>
          <h1>Who lives in my Azar?</h1>
          <Sample />
      </>
    );
  }
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Azar />);*/

  //Component in Files

 /* import Sample from './App';

  const r1=ReactDOM.createRoot(document.getElementById('root'))
  r1.render(<Sample/>)*/

  //Component Constructor

  /*class Sample extends React.Component
  {
     constructor()
     {
        super();
        this.state={name:"mohamed",age:34}
     }
     render()
     {
        return(
            <>
            <h1>UserName::{this.state.name}</h1>
            <h2>Password::{this.state.age}</h2>
            </>
          
        )
     }
  }
  
  const r1=ReactDOM.createRoot(document.getElementById('root'))
  r1.render(<Sample/>)*/
  

//Constructor using props

/*class Sample extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={f1:'green'}
        //this.state={f2:'Courier New'}
    }
    render()
    {
        
        return(
            <div>
            <h3 style={{background:this.state.f1}}>{this.props.text}</h3>
            <h3 style={{fontFamily:this.state.f2}}>{this.props.text}</h3>
            
        
            </div>
            
        )
    }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample text='Hello World'/>)*/

//Changing the state object

/*class Sample extends React.Component
{
  constructor(props)
  {
     super(props);
     this.state = {
       emp:{
          id:1002,
          name:"azar",
          city:"Lahore"
       },
       showData:false
  };
}
showdata(){
  this.setState({showData:true });
}
 hideData(){
   this.setState({showData:false});
 }
  render()
   {
     let data ;
      if (this.state.showData== true) 
      {
         data= <div><b>City :</b>{this.state.emp.city}<b>Id::</b>{this.state.emp.id}<br/>
           <button onClick={this.hideData.bind(this)} >Hide Data</button></div>;
      }
      else
       {
         data= <button onClick={this.showdata.bind(this)} >Show Data</button>;
          }
            return (
               <div className="App">
                <h1>Employee Details </h1>
                 {data}
              </div>
              );
               }
};
//ReactDOM.render(<Sample /> ,document.getElementById('root'));

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample /> )*/

//React Event

/*function Football()
{
   const shoot=()=>{
    alert("Goal");
   }
   return(
    <>
      <button onClick={shoot}>ClickHere</button>
    </>
   )
}

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Football/>)*/

//React Event

/*function Football()
{
    const shoot=(a)=>{
        alert("Goal"+a);
    }
    return(
        <button onClick={()=>shoot("Argument!!")}>ClickHere</button>
    )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Football/>)*/

//React Bootstrap

/*const App=()=>{
    return(
        <>
          <button type='button' className='btn btn-primary'>ClickHere</button>
        </>
    )
}

const t1=ReactDOM.createRoot(document.getElementById('root'))
t1.render(<App/>)*/

//React Hooks useState()

import { useState,useEffect } from 'react';

/*function Counter()
{
    const [count,setCount]=useState(10);
    const [name,setName]=useState("Rahul");

    return(
        <>
          <div>
            <h1>Count:{count}</h1>
            <h1>Your name is::{name}</h1>
            <button onClick={()=>setCount(count+1)}>Increment</button>
          </div>
        </>
    )
}

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Counter/>)*/

/*function Counter()
{
    const [count,setCount]=useState(0)
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    return(
        <>
          <p>Count::{count}</p>
          <button onClick={()=>setCount(count+1)}>Increment</button>
          <p>Username::{username}</p>
          <input type='text' value={username} onChange={(e)=>setUsername(e.target.value)}/>
          <p>Password::{password}</p>
          <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>

          <table border='1'>
            <th>UserName</th>
            <th>Password</th>
            <tr>
                <td>{username}</td>
                <td>{password}</td>
            </tr>
        
          </table>
        </>
    )
}


const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Counter/>)*/

//Conditional Rendering

/*function MissedGoal()
{
    return<h1>MissedGoal</h1>
}
function MadeGoal()
{
    return<h1>Goal</h1>
}
function Goal(props)
{
    const isGoal=props.isGoal;
    // return<h1>{isGoal}</h1>
    if(isGoal==true)
    {
        return<MadeGoal/>
    }
    else
    {
        return<MissedGoal/>
    }
}

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Goal isGoal={Math.random()>0.7}/>)*/

//React List

/*function Emp(props) {
    return <h1>{props.n1}</h1>;
}

function Salary() {
    //const emp = ["mohan", "mohamed", "azar", "raja"];
    const emp={1:"azar",2:"mohamed",3:"raja"}
    return (
        <ul>
            {emp.map((c1) => (
                <Emp n1={c1} key={c1} />
            ))}
        </ul>
    );
}

const r1 = ReactDOM.createRoot(document.getElementById('root'));
r1.render(<Salary />);*/

//React Form

/*function Sample()
{
    return(
        <>
          <form>
            <label>UserName</label>
            <input type='text' />
            <label>Password</label>
            <input type='password'/>
            <input type='submit' value="Login" className='btn btn-primary'/>
          </form>
        </>
    )
}

const r1 = ReactDOM.createRoot(document.getElementById('root'));
r1.render(<Sample />)*/

//React TextArea

/*function MyTextArea()
{
    const[value,setvalue]=React.useState("Helloworld")
    return(
    <>
      <textarea value={value} onChange={(e)=>setvalue(e.target.value)}></textarea>
      <p>{value}</p>
    </>
    )
}

const r1 = ReactDOM.createRoot(document.getElementById('root'));
 r1.render(<MyTextArea />);*/

 //React getDerivedStateFromProps

 /*class Header extends React.Component
 {
    constructor(props)
    {
        super(props);
        this.state={favcolor:"red"};
    }
    static getDerivedStateFromProps(props,state)
    {

        return {favcolor:props.favcolor}
    }
    render()
    {
        return(
            <h1>This is reader Page{this.state.favcolor}</h1>
        )
    }
 }

 const r1=ReactDOM.createRoot(document.getElementById('root'))
 r1.render(<Header favcolor="pink"/>)*/

 //ComponentDidMount

 class Header extends React.Component
 {
    constructor(props)
    {
        super(props);
        this.state={favcolor:"red"};
    }
    
    componentDidMount()
    {
        setTimeout(()=>{
            this.setState({favcolor:"yellow"})
        },1000)
    }

    render()
    {
        return(
            <h1>This is reader Page{this.state.favcolor}</h1>
        )
    }
 }

 const r1=ReactDOM.createRoot(document.getElementById('root'))
 r1.render(<Header/>)