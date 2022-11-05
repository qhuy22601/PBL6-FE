import React, { useState, useEffect } from "react";
import Header from "./Header"
import MenuBar from "./MenuBar"
import "./styles/HomePage.css";
import { Slide } from 'react-slideshow-image';
import './styles/Slide.css'
import HeaderAfter from "./HeaderAfter"

import sneakers from "../fruit.json"


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

       

    <div className='product'>
       <div className="gallery">
            {sneakers.map(shoes=>{
                return(
                    <div className="content" key={shoes.id}>
                        
                       <h3>{shoes.name}</h3>
                        <img className="shoes" src= {shoes.image}></img>
                        <h4>{shoes.price} VND</h4>
                    </div>
                )
            })}
        </div>
            </div>
        </div>
        

    );
  
}

export default HomePage;