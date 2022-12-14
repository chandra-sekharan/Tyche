import React from "react";
import './styles/main.css';
import logo from '../components/images/html5.png';
import {Link} from 'react-router-dom';



const Html =({video})=>{

const data  = ([
    {
        id:1,
        name:"module 1",
        src:"https://drive.google.com/file/d/1oeyGBIMqpXoqoUO1winOkJlvzyw9hPO6/preview",
    },
    {
        id:2,
        name:"module 2",
        src:"https://drive.google.com/file/d/1og6MT3eA-DOaWPzYPT33Em2JGAg8J271/preview",
    },
    {
        id:3,
        name:"module 3",
        src:"https://drive.google.com/file/d/1ojncTSwC2WK2IUjTBogOC9vmanQVCxDr/preview",
    },
    {
        id:4,
        name:"module 4",
        src:"https://drive.google.com/file/d/1omzEfWGHeHUW-8Bmkke7zIzdMGFJeVp5/preview",
    },
    {
        id:5,
        name:"module 5",
        src:"https://drive.google.com/file/d/1ozztlLaNmFlcL21WyBRz31nD2bc-CAbb/preview",
    },
    {
        id:6,
        name:"module 6",
        src:"https://drive.google.com/file/d/1p4Iqlv_Nyl62GplozK40PNhTxpJti1dP/preview",
    },
    {
      id:7,
      name:"module 7",
      src:"https://drive.google.com/file/d/1p6RrcIXgJP8_BNY8EgQBkYlZEgkZjDVm/preview",
  },
  {
    id:8,
    name:"module 8",
    src:"https://drive.google.com/file/d/1p6_rg_eHUF6p_zuJ8kfvnv4XFXYEWZun/preview",
},
{
  id:9,
  name:"module 9",
  src:"https://drive.google.com/file/d/1p8-9WKKa3WGpdCrWCwL2vYGJc-pcKraM/preview",
},
{
  id:10,
  name:"module 10",
  src:"https://drive.google.com/file/d/1p85EuT4XcjLV_Ci8Ya090Ys-jqR0C3NE/preview",
},
{
  id:11,
  name:"module 11",
  src:"https://drive.google.com/file/d/1pB3XJtU8qJFMoAbIB6yFN3EkFYf-G-8I/preview",
},
{
  id:12,
  name:"module 12",
  src:"https://drive.google.com/file/d/1pBTVHsP3GqZH17IU-yoyybK22EMkg8Mz/preview",
},
{
  id:13,
  name:"module 13",
  src:"https://drive.google.com/file/d/1pDGHr5hP-BpnYWW_oR8ZGbm09OBA4SOl/preview",
},
{
  id:14,
  name:"module 14",
  src:"https://drive.google.com/file/d/1pUtkmP_NyiaPOBAFr3GgYG4gkyyTTNvw/preview",
},
{
  id:15,
  name:"module 15",
  src:"https://drive.google.com/file/d/1pHXUKqF_pn8iYTu2F2OCVeu9rojLEuBz/preview",
},
{
  id:16,
  name:"module 16",
  src:"https://drive.google.com/file/d/1pMU1q2EVhYJ1cy33XONxvi8HUoxn7-FS/preview",
},
{
  id:17,
  name:"module 17",
  src:"https://drive.google.com/file/d/1pQ6yD-06qz8siIop-WFfP_nPr-KAIT9h/preview",
},

    
]);
    
    
  return(
    <>
      <div className="container">
         <div className="section1">
         </div>
         <div className="logo">
            <img src={logo}   alt="html5" />
            </div>
            <div className="title">
              <h1>HTML : Tutorial</h1>
            </div>
         <div className="container2">
           {data.map((info)=>
             <div className="module">
               <Link to="/course" style={{ textDecoration: 'none' }}><h3 onClick={()=>video(info.src)}>Introduction to HTML : {info.name}</h3></Link>
             </div>
           )};
         </div>
        </div>  
    </>
  );
}

export default Html;