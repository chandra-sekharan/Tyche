import React , {useState} from "react";
import './styles/course.css';
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";

export const Course = (props)=>{
  const [Loading , setLoading] = useState(true);

  setTimeout(()=>{

    
    setLoading(false);
    
  },2000)

    const navigate = useNavigate();
  
    return(
        <>
        {Loading ? <Loader/>
          :
        <>
        <button onClick={()=>navigate(-1)}>Back</button>
        <center>
        <iframe src={props.src} width="640" height="480" sandbox="allow-same-origin allow-scripts" allow="autoplay"></iframe>
        </center>
        </>
         }
        
        </>
    );
}