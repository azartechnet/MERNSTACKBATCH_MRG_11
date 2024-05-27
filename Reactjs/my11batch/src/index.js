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

function Football()
{
    const shoot=(a)=>{
        alert("Goal"+a);
    }
    return(
        <button onClick={()=>shoot("Argument!!")}>ClickHere</button>
    )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Football/>)






