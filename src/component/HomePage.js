import React, { useState, useEffect } from "react";
import Header from "./Header"
import HeaderAfter from "./HeaderAfter"
import Fruit from './Fruit'
import styles from "./styles/HomePage.module.css";

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
        <div className={styles.container}>
            {(checkSignin!==null)?(<HeaderAfter></HeaderAfter>):(<Header></Header>)}
            
     
    
        <div className={styles.ima}>
            <img className={styles.imggg} src="https://img.freepik.com/premium-vector/fresh-fruit-logo-design-mascot_157713-4.jpg?w=2000"></img>
        </div>

       

    {/* <div className='product'> */}
       <div className={styles.show}>
           
            <Fruit/>
        </div>
            </div>
        // </div>
        

    );
  
}

export default HomePage;