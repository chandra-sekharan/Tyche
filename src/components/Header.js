import React from "react";
import './styles/App.css';
import Tyche from '../components/images/Tyche.png';

export const Header = () =>{
    return(
        <div className="header">
         <div className="brand">
           <img src={Tyche}  alt=""/>
         </div>
         <div className="search">
         <div className="searchbox">
          <input type="text" placeholder="Search here..." />
          <input type="button" onClick={()=>alert("This Feature is not available right now")} value="search" /> 
          </div>
         </div>
        </div>
    );
}