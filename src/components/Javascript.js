import React from "react";
import './styles/main.css';
import logo from '../components/images/javas.png';
import {Link} from 'react-router-dom';



const Java =({video})=>{

const data  = ([
    {
        id:1,
        name:"module 1",
        src:"https://drive.google.com/file/d/1uO7fWWZ7CwBPpmL1xQgoR4jW3HEC0yHy/preview",
    },
    {
        id:2,
        name:"module 2",
        src:"https://drive.google.com/file/d/1uOzVDc1FUR6My5vDO_x_rgXc3b0Qq_ZE/preview",
    },
    {
        id:3,
        name:"module 3",
        src:"https://drive.google.com/file/d/1uS296nTFF-GiQq8r2ail9auvJhGE3utO/preview",
    },
    {
        id:4,
        name:"module 4",
        src:"https://drive.google.com/file/d/1uW0pv791X96qClEVbVL6mEGljbgVFsDN/preview",
    },
    {
        id:5,
        name:"module 5",
        src:"https://drive.google.com/file/d/1uXA6BCsTyvVY61jFKu1S-BcKrwwvgw41/preview",
    },
    {
        id:6,
        name:"module 6",
        src:"https://drive.google.com/file/d/1ughBy63hmuOD4IVkxa4FVYo14ZVf_4L9/preview",
    },
    {
      id:7,
      name:"module 7",
      src:"https://drive.google.com/file/d/1uhM72M9I6nuf1dDwByvhlIP065uGkU6l/preview",
  },
  {
    id:8,
    name:"module 8",
    src:"https://drive.google.com/file/d/1ukBgFsz6UPHyv5nG9g1pekm4_aGDWkdG/preview",
},
{
  id:9,
  name:"module 9",
  src:"https://drive.google.com/file/d/1uknGPIZptfhdkuTrKTFm1_Vmb5kstrrw/preview",
},
{
  id:10,
  name:"module 10",
  src:"https://drive.google.com/file/d/1ulYt6fySCXIqIu0KfBIcvxn6qS4ANl3e/preview",
},
{
  id:11,
  name:"module 11",
  src:"https://drive.google.com/file/d/1ulwL9GsImj1SWzuI3_Y6y073jWmeWDlv/preview",
},
{
  id:12,
  name:"module 12",
  src:"https://drive.google.com/file/d/1upb6oG8qnJbE94fpiWuBfzACX7g5YmsX/preview",
},
{
  id:13,
  name:"module 13",
  src:"https://drive.google.com/file/d/1urFS6M1AvyQdikrPrIQxsymBmunnPcMf/preview",
},
{
  id:14,
  name:"module 14",
  src:"https://drive.google.com/file/d/1uvn29Zc5UWQ7qJyNd658kC41z-TGHaBH/preview",
},
{
  id:15,
  name:"module 15",
  src:"https://drive.google.com/file/d/1uwHVKeOXAxT8UPyIt1WkL_qCn2uxpAnz/preview",
},
{
  id:16,
  name:"module 16",
  src:"https://drive.google.com/file/d/1v14U8GE3MokCC0ts9I-hs1uCaSqdze9p/preview",
},
{
  id:17,
  name:"module 17",
  src:"https://drive.google.com/file/d/1v1SJrt5cqwRnBCdcHt1FRwvEqZktpSUx/preview",
},
{
    id:18,
    name:"module 18",
    src:"https://drive.google.com/file/d/1v3fl-kbCoT3WPFolpaFyQgiBL-Ur87YN/preview",
  },{
    id:19,
    name:"module 19",
    src:"https://drive.google.com/file/d/1uA03udBjA-m9UKfhEwlmLYHbhOFAkwNG/preview",
  },{
    id:20,
    name:"module 20",
    src:"https://drive.google.com/file/d/1uFc-UzmRSqTqTwNAJeXrChb5r99tw35Q/preview",
  },{
    id:21,
    name:"module 21",
    src:"https://drive.google.com/file/d/1uGWxcn-2O0bxvpFdYr_OEveCDfjyikTE/preview",
  },{
    id:22,
    name:"module 22",
    src:"https://drive.google.com/file/d/1uH3STnjvpdJcZDDtED7j-ID0IZrKW6_d/preview",
  },
    
]);
    
    
  return(
    <>
      <div className="container">
         <div className="section1">
         </div>
         <div className="logo">
            <img src={logo} width="170px"  alt="javascript" />
            </div>
            <div className="title">
              <h1>Javascript : Tutorial</h1>
            </div>
         <div className="container2">
           {data.map((info)=>
             <div className="module">
               <Link to="/course" style={{ textDecoration: 'none' }}><h3 onClick={()=>video(info.src)}>Introduction to Javascript : {info.name}</h3></Link>
             </div>
           )};
         </div>
        </div>  
    </>
  );
}

export default Java;