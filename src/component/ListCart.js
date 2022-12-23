import styles from "./styles/ListCart.module.css";
import Header from "./Header"
import HeaderAfter from "./HeaderAfter";
import Cart from "./Cart"
import { useState } from "react";
function ListCart(){

    const[checkSignin,setCheckSignin] =useState(localStorage.getItem("User"))

return(
    <div className={styles.container}>
            {(checkSignin!==null)?(<HeaderAfter></HeaderAfter>):(<Header></Header>)}
       <div className={styles.show}>
           
         <Cart/>
        </div>
            </div>
)
}

export default ListCart;