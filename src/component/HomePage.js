import React, { useState, useEffect } from "react";
import Header from "./Header"
import "./styles/HomePage.css";
import { Slide } from 'react-slideshow-image';
// import './styles/Slide.css'
import HeaderAfter from "./HeaderAfter"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Fruit from './Fruit'

function HomePage(){

const [data,setData]=useState([]);
const[checkSignin,setCheckSignin] =useState(localStorage.getItem("User"))

// useEffect=(() =>{
//     if(localStorage.getItem('phoneNumber')!==null){
//         setCheckSignin(true);
//     }
//     else
//       setCheckSignin(false);
//   });

    return(
        <div className='container'>
            <div className='head'>
            {(checkSignin!==null)?(<HeaderAfter></HeaderAfter>):(<Header></Header>)}
            </div>
     
    
        <div className="ima">
            <img className='imggg' src="https://img.freepik.com/premium-vector/fresh-fruit-logo-design-mascot_157713-4.jpg?w=2000"></img>
        </div>

       

    {/* <div className='product'> */}
       <div className="show">
           
            <Fruit/>
        </div>
            </div>
        // </div>
        

    );
  
}

export default HomePage;