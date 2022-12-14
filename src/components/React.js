import React from "react";
import './styles/main.css';
import logo from '../components/images/react.png';
import {Link} from 'react-router-dom';



const ReactJ =({video})=>{

const data  = ([
    {
        id:1,
        name:"module 1",
        src:"https://drive.google.com/file/d/11cr-kHTz5W0Er_e-sr16uWymp9pO69CS/preview",
    },
    {
        id:2,
        name:"module 2",
        src:"https://drive.google.com/file/d/11dBRv4B9uydZVZEPF-xGdx2OJbZK6iXL/preview",
    },
    {
        id:3,
        name:"module 3",
        src:"https://drive.google.com/file/d/11deqfSAvyvPZRGZBMmuXHVkDStdC4QwT/preview",
    },
    {
        id:4,
        name:"module 4",
        src:"https://drive.google.com/file/d/11fYHDXaSsGd0tq_2jPTfGiv_SqNQrMNA/preview",
    },
    {
        id:5,
        name:"module 5",
        src:"https://drive.google.com/file/d/11n1WFGDLILqoRzgsF0ZrvawiGPI8ub4c/preview",
               
    },
    {
        id:6,
        name:"module 6",
        src:"https://drive.google.com/file/d/11w8CB1X3CdYkGtjPsYtLeIHjQFD45KAo/preview",
    },
    {
        id:7,
        name:"module 7",
        src:"https://drive.google.com/file/d/11wk9kNL1ZgMmi5sh1e0VKS4RUGvoHeod/preview",
    },
    {
      id:8,
      name:"module 8",
      src:"https://drive.google.com/file/d/12-llLCAxFs4ScNBuOe05tY-l3sWC7hLJ/preview",
  },
  {
    id:9,
    name:"module 9",
    src:"https://drive.google.com/file/d/122y8Fvk-hxxyiVC-u59YOisHuBJR9Upl/preview",
},
{
  id:10,
  name:"module 10",
  src:"https://drive.google.com/file/d/123pLUVtpCtI3z4MxuTHHvIveFmxr3CUN/preview",
},
{
  id:11,
  name:"module 11",
  src:"https://drive.google.com/file/d/125ykNXiS8IokFCFeZYzLfghQaIyLBF3V/preview",
},
{
  id:12,
  name:"module 12",
  src:"https://drive.google.com/file/d/1283ufr-yhLHVDw8q7RqbOUvyAQboy0LM/preview",
},
{
  id:13,
  name:"module 13",
  src:"https://drive.google.com/file/d/12BOvTIeBx3NHU9RCvLUtbSmHfFmyNe_x/preview",
},
{
  id:14,
  name:"module 14",
  src:"https://drive.google.com/file/d/12FYiJFELPbuzFpjhjkpP5f4wYN934ELz/preview",
},
{
  id:15,
  name:"module 15",
  src:"https://drive.google.com/file/d/12FgEBVTXMROh3Ng0p1ez-POkiEreDY3a/preview",
},
{
  id:16,
  name:"module 16",
  src:"https://drive.google.com/file/d/12JxI4IFZSFCglbF6OKlp_78MaErzLHqQ/preview",
},
{
  id:17,
  name:"module 17",
  src:"https://drive.google.com/file/d/11ReE6HmMqmaMiE4dYNsriYXocl6_LuZP/preview",
},
{
    id:18,
    name:"module 18",
    src:"https://drive.google.com/file/d/11cEOP8l2nmHohoInZQDVUcBoLi7Zleqm/preview",
  },  
]);
    
    
  return(
    <>
      <div className="container">
         <div className="section1">
         </div>
         <div className="logo">
            <img src={logo} width="170px"  alt="React" />
            </div>
            <div className="title">
              <h1>React : Tutorial</h1>
            </div>
         <div className="container2">
           {data.map((info)=>
             <div className="module">
               <Link to="/course" style={{ textDecoration: 'none' }}><h3 onClick={()=>video(info.src)}>Introduction to React : {info.name}</h3></Link>
             </div>
           )};
         </div>
        </div>  
    </>
  );
}

export default ReactJ;