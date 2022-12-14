import React from "react";
import './styles/main.css';
import logo from '../components/images/boot.png';
import {Link} from 'react-router-dom';



const Boot =({video})=>{

const data = ([
    {
        id:1,
        name:"module 1",
        src:"https://drive.google.com/file/d/1r9-aWRQ-aFnE0wfqHpBrk2fhI2Xs2C6i/preview",
    },
    {
        id:2,
        name:"module 2",
        src:"https://drive.google.com/file/d/1r9PuMWAlK4GwMuexSbRtf-YP7voHCF_p/preview",
    },
    {
        id:3,
        name:"module 3",
        src:"https://drive.google.com/file/d/1r9uujancfCkk5WnDFCSOxpYhZkII_eon/preview",
    },
    {
        id:4,
        name:"module 4",
        src:"https://drive.google.com/file/d/1rCNAhBqX2j66WHDD6seWCpEuetjWali2/preview",
    },
    {
        id:5,
        name:"module 5",
        src:"https://drive.google.com/file/d/1rDUgYDKoa0TU5Ea_-JAERiRl_ko9Kxyl/preview",
    },
    {
        id:6,
        name:"module 6",
        src:"https://drive.google.com/file/d/1rDotqPNtJzUOsBNHOy7o1zVXtJ_5Vb3U/preview",
    },
    
    
]);
    
    
  return(
    <>
      <div className="container">
         <div className="section1">
         </div>
         <div className="logo">
            <img src={logo} width="150px"  alt="bootstrap" />
            </div>
            <div className="title">
              <h1>Bootstrap : Tutorial</h1>
            </div>
         <div className="container2">
           {data.map((info)=>
             <div className="module">
               <Link to="/course" style={{ textDecoration: 'none' }}><h3 onClick={()=>video(info.src)}>Introduction to Bootstrap : {info.name}</h3></Link>
             </div>
           )};
         </div>
        </div>  
    </>
  );
}

export default Boot;