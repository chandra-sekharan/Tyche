import React from "react";
import './styles/main.css';
import logo from '../components/images/css3.png';
import {Link} from 'react-router-dom';



const Css =({video})=>{

const data  = ([
    {
        id:1,
        name:"module 1",
        src:"https://drive.google.com/file/d/1rq-hj_ykTzlRU0D3ZjJNHcRdTbA-SjbO/preview",
    },
    {
        id:2,
        name:"module 2",
        src:"https://drive.google.com/file/d/1rvvbXxp8MpTdZwbxq_Tes_TXIXBAm3Oj/preview",
    },
    {
        id:3,
        name:"module 3",
        src:"https://drive.google.com/file/d/1s0MQBQc2p6S1InLtqUc3uO8wY0TW5yff/preview",
    },
    {
        id:4,
        name:"module 4",
        src:"https://drive.google.com/file/d/1s39M8ssgvVF77eIBFbFookGFbM4ZmRWX/preview",
    },
    {
        id:5,
        name:"module 5",
        src:"https://drive.google.com/file/d/1s3hsIQKVaSemhkrY5pLx1_rU6WE0B-wP/preview",
    },
    {
        id:6,
        name:"module 6",
        src:"https://drive.google.com/file/d/1sCeYIukEEwvezFlCzp5dGANRVCRvj32E/preview",
    },
    {
      id:7,
      name:"module 7",
      src:"https://drive.google.com/file/d/1sFeAV2-XeJBXGFln1tifiRHW7cZtLN3m/preview",
  },
  {
    id:8,
    name:"module 8",
    src:"https://drive.google.com/file/d/1sHfRvWwbxjMsTg7RAY8wtl-X3FYgFHua/preview",
},
{
  id:9,
  name:"module 9",
  src:"https://drive.google.com/file/d/1sJu0voZohguOKNRbNlSSvWAyCuSL9QLp/preview",
},
{
  id:10,
  name:"module 10",
  src:"https://drive.google.com/file/d/1sOkbh4sB56YjbxFHqwyDUKeUrxWyDm7J/preview",
},
{
  id:11,
  name:"module 11",
  src:"https://drive.google.com/file/d/1zOEH-d7ZAUIZwspHMpwrWptKNqdSRaEd/preview",
},
{
  id:12,
  name:"module 12",
  src:"https://drive.google.com/file/d/1sT0coBYvCeWst-x29GflS-xz67tTyxny/preview",
},
{
  id:13,
  name:"module 13",
  src:"https://drive.google.com/file/d/1s_6yPBsX7NOw0JCFseUnDOf4r7f7dazc/preview",
},
{
  id:14,
  name:"module 14",
  src:"https://drive.google.com/file/d/1sb9GCokA60PWS-luYZ8j3V-PwHypOh5s/preview",
},
{
  id:15,
  name:"module 15",
  src:"https://drive.google.com/file/d/1scbXD6r4NARIskEOxpmb01hV3sA8Z6GQ/preview",
},
{
  id:16,
  name:"module 16",
  src:"https://drive.google.com/file/d/1siNGcyODiO5JukeCw1--Yw7NVP_kLjDT/preview",
},
{
  id:17,
  name:"module 17",
  src:"https://drive.google.com/file/d/1slrPuBO-nk6apAFAVDsaQcizrJuUCD74/preview",
},
{
    id:18,
    name:"module 18",
    src:"https://drive.google.com/file/d/1rKIm_8MIDtse30iJbotC-r4kS2rt2K6v/preview",
  },{
    id:19,
    name:"module 19",
    src:"https://drive.google.com/file/d/1rRx91aEGLytr4agu88wv2mLBz3MjgNgC/preview",
  },{
    id:20,
    name:"module 20",
    src:"https://drive.google.com/file/d/1zHxo1acmee38EzlGYxybkHYsV1sSW0fQ/preview",
  },{
    id:21,
    name:"module 21",
    src:"https://drive.google.com/file/d/1rhQ12x9kW__Upz5nYUCllyrt_x-EsYwx/preview",
  },{
    id:22,
    name:"module 22",
    src:"https://drive.google.com/file/d/1rnMW3phyf69P5zNFD348sJtlC530vXXx/preview",
  },
    
]);
    
    
  return(
    <>
      <div className="container">
         <div className="section1">
         </div>
         <div className="logo">
            <img src={logo} width="130px"  alt="css3" />
            </div>
            <div className="title">
              <h1>CSS : Tutorial</h1>
            </div>
         <div className="container2">
           {data.map((info)=>
             <div className="module">
               <Link to="/course" style={{ textDecoration: 'none' }}><h3 onClick={()=>video(info.src)}>Introduction to CSS : {info.name}</h3></Link>
             </div>
           )};
         </div>
        </div>  
    </>
  );
}

export default Css;