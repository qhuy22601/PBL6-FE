import React from 'react';
import { useEffect, useState } from "react";
import Header from './Header'
import HeaderAfter from "./HeaderAfter"
import styles from "./styles/UserPage.module.css";


function UserPage(props){

    const[checkSignin,setCheckSignin] =useState(localStorage.getItem("User"))

    return(
      <div className={styles.container}>
        
        {(checkSignin!==null)?(<HeaderAfter></HeaderAfter>):(<Header></Header>)}
        
        </div>
       
    );
}


export default UserPage;