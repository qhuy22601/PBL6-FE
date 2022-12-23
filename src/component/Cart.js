import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import styles from "./styles/ListCart.module.css";
import axios from "axios";
import { useState, useEffect } from "react";

function Cart() {
  const [data, setData] = useState([]);
  const [id, setId] = useState([]);

  async function getItemFromCart() {
    const response = await axios({
      method: "get",
      url: "http://116.105.26.48/api/auth/user/listFruitOfCart",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("Token"),
      },
    });
    if (response.data !== null && response.data.status === "Thất bại !!!") {
      console.log(response.data.status);
    }

    if (response.data !== null && response.data.status === "Thành công !!!") {
      console.log("thanh cong ne");
      setData(response.data.data);
      setId(response.data.data.fruit_id)
    }
  }

  

  useEffect(() =>{
    getItemFromCart()
  },[])

  return (
    <div className={styles.container}>
      {data.map((item) => {
        return(
        <List key ={item.id}>
          <ListItem divider>
            <ListItemButton>
              {/* <ListItemText primary={item.quantity} /> */}
              <h1>{item.quantity}</h1>
            </ListItemButton>
          </ListItem>
        </List>
        )
      })}
    </div>
  );
}

export default Cart;
