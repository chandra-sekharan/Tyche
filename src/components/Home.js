import  { useState } from 'react';
import './styles/Home.css';
import webdev from '../components/images/webdev.png'


const Home = ({setlogin}) =>{
 const [user , setuser] = useState('');
 const [pass , setpass] = useState('');

  const openPopup = () =>{
    
      var x = document.getElementsByClassName('form')[0];
      var y = document.getElementsByClassName('homesection')[0];

      x.style.display = "flex";   
      y.style.filter = 'blur(8px)';
      y.style.backdropFilter = 'blur(10px)';
      
    }

    const boxclose = () =>{
    
      var x = document.getElementsByClassName('form')[0];
      var y = document.getElementsByClassName('homesection')[0];

      x.style.display = "none";   
      y.style.filter = 'none';
      
    }
    const handlesubmit =(event)=>{
        event.preventDefault();
       if(user === "web@123" & pass === "1234")
       {
         alert("login success");
         setlogin(true);
       }
       else
       {
        alert("login failed");
       }
    }
    return(
      <>
        <div className='homesection'>
         <div className='webbox' onClick={()=>openPopup()}>
           <img src={webdev}  alt="webdev" />
           <h3>Web Development</h3>
         </div>
         </div>
         <form className='form' onSubmit={handlesubmit}>
            <span onClick={()=>boxclose()}>&times;</span>
            <input type="text" required placeholder="username" value={user} onChange={(e)=>setuser(e.target.value)}/>
            <input type="password" required placeholder="password" value={pass} onChange={(e)=>setpass(e.target.value)}/>
            <button >Submit</button>
         </form>
         
        </>
    );
}

export default Home ;