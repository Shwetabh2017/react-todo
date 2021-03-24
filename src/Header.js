import React, { useState } from 'react'
import './App.css';
import {Link, Redirect, useHistory} from 'react-router-dom'

import Login from './Login'
function Header (){
   const history = useHistory();
     const [name, setname] = useState(true);  
      
       const toggle = ()=>{
         return(
           <div>
             {setname(prev => !prev)}  
             {navigateTo()}       
             </div>        
         )  } 
       
       const navigateTo = () => history.push('/login');
     return (
        <div className ='App-header'>
          <nav>
          <button  className = 'App-button' onClick = {toggle}> {name ?'Log in':'Sign out'}  </button>
          </nav>
          
           
        </div>
    )
}
export default Header