import React from "react";
import './styles/main.css';
import logo from '../components/images/php.png';
import {Link} from 'react-router-dom';



const Php =({video})=>{

const data  = ([
    {
        id:1,
        name:"module 1",
        src:"https://drive.google.com/file/d/1vhDmWhlcCbD1fWXtS5ADx-esFrR9cXTj/preview",
    },
    {
        id:2,
        name:"module 2",
        src:"https://drive.google.com/file/d/1vn9hNO8qOUYlgrgz5_WRG7dXhqotMVlZ/preview",
    },
    {
        id:3,
        name:"module 3",
        src:"https://drive.google.com/file/d/1vo8XumlHS4NzkibdV5okdeLQrixngGF4/preview",
    },
    {
        id:4,
        name:"module 4",
        src:"https://drive.google.com/file/d/1vqPYyGAqVhalobLHFj-8kJp87VPHVvhH/preview",
    },
    {
        id:5,
        name:"module 5",
        src:"https://drive.google.com/file/d/1vzw7K775qK-_D3X9hVSrrfLedZ2wUN96/preview",
    },
    {
        id:6,
        name:"module 6",
        src:"https://drive.google.com/file/d/1w3iIpN7wdNaxNElEFl2ioMT0ehwabBci/preview",
    },
    {
      id:7,
      name:"module 7",
      src:"https://drive.google.com/file/d/1-0a3XmOhbn3mSOtysIOdY7BYJtAraKQa/preview",
  },
  {
    id:8,
    name:"module 8",
    src:"https://drive.google.com/file/d/1-1YazhWHw94FvvcHd5dekJfNIDgYBQKH/preview",
},
{
  id:9,
  name:"module 9",
  src:"https://drive.google.com/file/d/1-8MaMJBxeno-uNOwVvhzI6hmxiE3VGAX/preview",
},
{
  id:10,
  name:"module 10",
  src:"https://drive.google.com/file/d/1-9_RW9-VnX7k18FvP8FiXGoq3fUE4QQC/preview",
},
{
  id:11,
  name:"module 11",
  src:"https://drive.google.com/file/d/1-FIpI4czSXPpGgep07m2DdGgI709XTXZ/preview",
},
{
  id:12,
  name:"module 12",
  src:"https://drive.google.com/file/d/1-GDW5tzCATddcvB7Q7AMYHMJQ5ITgEWv/preview",
},
{
  id:13,
  name:"module 13",
  src:"https://drive.google.com/file/d/1-GZGZfr2B4Kx5euxFclHsDL5FWk2oM79/preview",
},
{
  id:14,
  name:"module 14",
  src:"https://drive.google.com/file/d/1-HFpLmgRl2G72QGMuOAzQkbUZM3AAR9C/preview",
},
{
  id:15,
  name:"module 15",
  src:"https://drive.google.com/file/d/1-jV4L_hs6RALSq9jLinsnavmHsliKXQl/preview",
},
{
  id:16,
  name:"module 16",
  src:"https://drive.google.com/file/d/1-Sg-RizIRoK1Bk_uoyVozjRCxhACVmhe/preview",
},
{
  id:17,
  name:"module 17",
  src:"https://drive.google.com/file/d/1-VYfa1ISVx3By6Yz07wdXJYTOhxQywSN/preview",
},
{
    id:18,
    name:"module 18",
    src:"https://drive.google.com/file/d/1-a8k8XRB5jYrbd4nMdpHSJQhgD-wEhnI/preview",
  },{
    id:19,
    name:"module 19",
    src:"https://drive.google.com/file/d/1-dp8868LOXT4WTiftMVL_NyNMdFoAspo/preview",
  },{
    id:20,
    name:"module 20",
    src:"https://drive.google.com/file/d/1vHMLvXcb-S7n5BPax_hZGnezhI74JutV/preview",
  },{
    id:21,
    name:"module 21",
    src:"https://drive.google.com/file/d/1vVuuRY5kOSP7viTg2j3zH5fTohmKnnZC/preview",
  },{
    id:22,
    name:"module 22",
    src:"https://drive.google.com/file/d/1v_O7o7PbbqTHQqBaKBns5msq9m4QlbgW/preview",
  },
  {
    id:23,
    name:"module 23",
    src:"https://drive.google.com/file/d/1vaOxGeCSJdF_0mtqtKsZ5mvoIc7SwJJp/preview",
  },
  {
    id:24,
    name:"module 24",
    src:"https://drive.google.com/file/d/1vf0l7J9iJXw8Ez3oorbfBDFi3U96Rj4E/preview",
  },
    
]);
    
    
  return(
    <>
      <div className="container">
         <div className="section1">
         </div>
         <div className="logo">
            <img src={logo} width="170px"  alt="php" />
            </div>
            <div className="title">
              <h1>PHP : Tutorial</h1>
            </div>
         <div className="container2">
           {data.map((info)=>
             <div className="module">
               <Link to="/course" style={{ textDecoration: 'none' }}><h3 onClick={()=>video(info.src)}>Introduction to PHP : {info.name}</h3></Link>
             </div>
           )};
         </div>
        </div>  
    </>
  );
}

export default Php;