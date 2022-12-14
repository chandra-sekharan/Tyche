import React from "react";
import './styles/web.css';
import { Link } from "react-router-dom";
import html from '../components/images/html.jpg';
import css from '../components/images/css.png';
import js from '../components/images/javascript.png';
import bs from '../components/images/bootstrap.png';
import reactjs from '../components/images/reactjs.png';
import db from '../components/images/dbmss.png';
import php from '../components/images/phpp.png';

export const Web = () => {

    const webdata = ([
        {
            id:1,
            topic:"HTML Tutorial",
            image:html,
            link:"/html",
        },
        {
            id:2,
            topic:"CSS Tutorial",
            image:css,
            link:"/css",
        },
        {
            id:3,
            topic:"Bootstrap Tutorial",
            image:bs,
            link:"/bootstrap",
        },
        {
            id:4,
            topic:"Javascript Tutorial",
            image:js,
            link:"/javascript",
        },
        {
            id:5,
            topic:"DBMS Tutorial",
            image:db,
            link:"/dbms",
        },
        {
            id:6,
            topic:"PHP Tutorial",
            image:php,
            link:"/php",
        },
        {
            id:7,
            topic:"React Tutorial",
            image:reactjs,
            link:"/react",
        },
    ]);

   return(
    <>
    <div className="container1">
       <h1>Web Development</h1>
       <h2>Modules in Web Development</h2>
       <div className="container3">
        {webdata.map((data)=>
       <div className="topic">
       <Link to={data.link}><img src={data.image} alt="" /></Link>
       <h2>{data.topic}</h2>
       </div>
        )}
        </div>
        <div className="footer"></div>
    </div>
    
    </>
   );
}