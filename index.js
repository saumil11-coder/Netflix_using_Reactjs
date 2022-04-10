// import React from 'react'; //CHALLENGE 1
// import ReactDOM from 'react-dom';
// const  fname="Saumil";
// const  lname="patel12";
// ReactDOM.render(
//     <>
//     {/* <h1>My name is {fname+lname}</h1> */}
//     <h1>  {`My first name is ${fname} and my last name is  ${lname}`}</h1>
//     <p> The value of 2+3= {Math.random()}
//     </p></>
//     ,document.getElementById('root')); 



//Challenge 2
// import React from 'react';
// import ReactDOM from 'react-dom';
// const fname="Saumil ";
// const lname="Patel";
// const currDate=new Date().toLocaleDateString();
// const currTime=new Date().toLocaleTimeString();
// ReactDOM.render(<>
// <h1>{`my name is ${fname} ${lname}`} </h1>
// <p>Current Date is={currDate}</p>
// <p>Current Time is ={currTime}</p>
// </>
// ,document.getElementById('root')
// );



// CHALLENGE 3
// import React from 'react';    
// import ReactDOM from 'react-dom';
// import "./index.css"
// const name="Saumil";
// const img1="https://picsum.photos/200/300";
// const img2="https://picsum.photos/250/300";
// const img3="https://picsum.photos/300/300";
// const links="https://www.google.com";
// const heading={
//     color:'#fa9191',
//     textTransform:"capitalize",
//     textAlign:'center',
//     fontWeight:"bold",
//     textShadow:'0px 2px 4px #ffe9c5',
//     fontFamily:"'Josefin Sans', sans-serif",
//     margin:'70px 0' };
// ReactDOM.render(<>
// <h1 style={heading}> My name is {name}</h1>
// <div className="img_div">
// <img src={img1}alt="random image"/>
// <img src={img2}alt="random image"/>
// <a href={links} target="_saumil">
// <img src={img3}alt="random image"/>
// </a>
// </div>
// </>
// ,document.getElementById('root')
// );



// CHALLENGE 4
//  import React from 'react';
//  import ReactDOM from 'react-dom';
//  import "./index.css";
// let currDate=new Date(2020,5,5,1);//YYYY-MM-DD-Hour
// currDate=currDate.getHours();
// let greeting='';
// const cssStyle={};
// if(currDate>=1&&currDate<12)
// {
//     greeting='Good Morning';
//     cssStyle.color='green';
// } 
// else if(currDate>=12&&currDate<19){
//     greeting='Good AfterNoon';
//     cssStyle.color="Orange";
// }
// else{
//     greeting='Good Night';
//     cssStyle.color="Black";}
// ReactDOM.render(
//      <>
//      <div>
//     <h1>Hello sir , <span style={cssStyle}>{greeting}</span></h1>
//     </div></>
// ,document.getElementById('root')
//  );




//Challenge 5
// import React from "react";
// import ReactDOM from "react-dom";
// import App from './App';



// ReactDOM.render(
//     <>
//    <App></App>
//    </>
// ,document.getElementById("root")
// );



//challenge 6
// import React from 'react';
// import  ReactDOM  from 'react-dom';
// import "./index.css";
// import App from "./App";

// ReactDOM.render(
// <>
// <App />
// </>
// ,document.getElementById('root')
// );



//import and export magic
// import React from 'react';
// import ReactDOM from 'react-dom';
// import coder, { favProg,Myname } from "./App";

// ReactDOM.render(
//     <>
//     <ol>
//         <li>Saumil</li>
//         <li>{coder}</li>
//         <li>{favProg}</li>
//         <li>{Myname()}</li>
//     </ol>
//     </>
//     ,document.getElementById('root'));


// //Challenge Simple Calculator
// import React from 'react';
// import ReactDOM from "react-dom";
// import App1 from './App';

// ReactDOM.render(
//     <h1>{App1()}</h1>
    
//     ,document.getElementById('root'));





//Challenge Netflix 
import React from 'react';
import ReactDOM from "react-dom";
import Card from './Card';
import "./index.css";
import Sdata from "./Sdata";
function ncard(val)
{
   
}


ReactDOM.render(
    <>
    <h1 className='heading_style'>List of TOP netflix web Series</h1>
  
{Sdata.map((val)=>
{
    return (
        <Card 
        imgsrcs={val.imgsrcs}
        title={val.title}
        sname={val.sname}
        link={val.link}
        />

    );

})}
    </>

,document.getElementById('root')
);