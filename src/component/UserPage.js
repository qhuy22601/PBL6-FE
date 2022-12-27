import React from 'react';
import { useEffect, useState } from "react";
import Header from './Header'
import HeaderAfter from "./HeaderAfter"
import styles from "./styles/UserPage.module.css";
import Purchase from './Purchase';

function UserPage(){

    const[checkSignin,setCheckSignin] =useState(localStorage.getItem("User"))

    return(
      <div className={styles.container}>
        
        {(checkSignin!==null)?(<HeaderAfter></HeaderAfter>):(<Header></Header>)}
        
        <Purchase/>



        </div>
       
    );
}


export default UserPage;