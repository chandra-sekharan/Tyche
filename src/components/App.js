import React, { useState } from 'react';
import './styles/App.css';
import { Course } from './course';
import Html from './Html';
import {BrowserRouter , Routes, Route} from 'react-router-dom';
import Css from './Css';
import Boot from './Boot';
import Java from './Javascript';
import Php from './Php';
import Dbms from './Dbms';
import ReactJ from './React';
import { Web } from './Web';
import { Header } from './Header';
import Home from './Home';


const App = ()=>{
const [src , setsrc] = useState('');
const [login , setlogin] = useState('');





  const video =(data)=>{
    
    setsrc(data);
}
  return (
    <BrowserRouter>
    <div>
      <Header/>
      
        <Routes>
        <Route path='/' element={<Web/>} />
        <Route path='/html' element={<Html video={video}/>} />
        <Route path='/css' element={<Css video={video}/>} />
        <Route path='/bootstrap' element={<Boot video={video}/>} />
        <Route path='/php' element={<Php video={video}/>} />
        <Route path='/javascript' element={<Java video={video}/>} />
        <Route path='/dbms' element={<Dbms video={video}/>} />
        <Route path='/react' element={<ReactJ video={video}/>} />
        <Route path='/course' element={<Course src={src}/>} /> 
      </Routes>
       
      
    </div>
    </BrowserRouter>
  );
}

export default App;
