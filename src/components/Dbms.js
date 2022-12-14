import React from "react";
import './styles/main.css';
import logo from '../components/images/dbms.png';
import {Link} from 'react-router-dom';



const Dbms =({video})=>{

const data  = ([
    {
        id:1,
        name:"module 1",
        src:"https://drive.google.com/file/d/1-rifc-Bqjsr7e1sv_1U75mNAU5wSk33a/preview",
    },
    {
        id:2,
        name:"module 2",
        src:"https://drive.google.com/file/d/1-yhUeMauDbGn9Q0sorv6iqhCYnF_wN3B/preview",
    },
    {
        id:3,
        name:"module 3",
        src:"https://drive.google.com/file/d/1013aZUIRCl-S6xKEZ6DWEHZTPtJuKouM/preview",
    },
    {
        id:4,
        name:"module 4",
        src:"https://drive.google.com/file/d/102BoGn1i4l7Lzu_fRtqSo6Ig-ATJQvPN/preview",
    },
    {
        id:5,
        name:"module 5",
        src:"https://drive.google.com/file/d/105T8cFvpZ6sLmUI_RW_DONVCtN4XSf9X/preview",
               
    },
    {
        id:6,
        name:"module 6",
        src:"https://drive.google.com/file/d/108qH5-bxVRz1NrnO5FMIb6D25ppHefmw/preview",
    },
    {
        id:7,
        name:"module 7",
        src:"https://drive.google.com/file/d/10H84W66Dop2FnaAB_2yWdNc4Wyo0-5Wv/preview",
    },
    {
      id:8,
      name:"module 8",
      src:"https://drive.google.com/file/d/10KPE-W1Ky5121lxGmhY4Y2-fT8C0Z_iE/preview",
  },
  {
    id:9,
    name:"module 9",
    src:"https://drive.google.com/file/d/10M92C8rpAPc_vHD3OY6RkEh4Fx-spkan/preview",
},
{
  id:10,
  name:"module 10",
  src:"https://drive.google.com/file/d/10Q0-g7_XBuT-lbvoNvds3NMlb9_cKxPL/preview",
},
{
  id:11,
  name:"module 11",
  src:"https://drive.google.com/file/d/10QmFQNuLw6dZFaFHjIorn-sJvUZH50pC/preview",
},
{
  id:12,
  name:"module 12",
  src:"https://drive.google.com/file/d/10W27rJDEbnPD9lU65oe5K-ejFtmV00Wj/preview",
},
{
  id:13,
  name:"module 13",
  src:"https://drive.google.com/file/d/10WS2HeO0EAocQpq7X84HBWfWmp6qG6-y/preview",
},
{
  id:14,
  name:"module 14",
  src:"https://drive.google.com/file/d/10XedenISOMsPCGdCTYJDjpI-FjW5q3Or/preview",
},
{
  id:15,
  name:"module 15",
  src:"https://drive.google.com/file/d/10Z_9MVX5CQlpQTjjI6ESLcwCRK0ci-8w/preview",
},
{
  id:16,
  name:"module 16",
  src:"https://drive.google.com/file/d/10ni25Lzuwy4PO_rulR-PtTVWVz4YHKFl/preview",
},
{
  id:17,
  name:"module 17",
  src:"https://drive.google.com/file/d/1-r3kxxmHAsjWc_2sgoFrcmRi5EiEF2l6/preview",
},
    
]);
    
    
  return(
    <>
      <div className="container">
         <div className="section1">
         </div>
         <div className="logo">
            <img src={logo} width="170px"  alt="dbms" />
            </div>
            <div className="title">
              <h1>DBMS : Tutorial</h1>
            </div>
         <div className="container2">
           {data.map((info)=>
             <div className="module">
               <Link to="/course" style={{ textDecoration: 'none' }}><h3 onClick={()=>video(info.src)}>Introduction to DBMS : {info.name}</h3></Link>
             </div>
           )};
         </div>
        </div>  
    </>
  );
}

export default Dbms;