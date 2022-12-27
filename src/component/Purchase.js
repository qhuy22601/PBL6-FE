import React, { useEffect, useState } from "react";
import styles from "./styles/Purchase.module.css";
import axios from "axios";
import ListGroup from "react-bootstrap/ListGroup";
import { dividerClasses } from "@mui/material";


function Purchase() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    listOrder();
  }, []);

  async function listOrder() {
    const response = await axios({
      method: "GET",
      url: "https://ltmnhom4.tk/api/auth/user/listOrder",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("Token"),
      },
    });
    if (response.data !== null && response.data.status === "Thất bại !!!") {
      console.log(response.data.status);
    }
    if (response.data !== null && response.data.status === "Thành công !!!") {
      setData(response.data.data);
      setLoading(false)
      console.log(JSON.stringify(data));
    }
  }

  if(loading){
    return (
        <div>Loading...</div>
    );
  }
 else{
  return (
        <ListGroup>
          {data.map((item) => {
            <ListGroup.Item key={item.id}>
              <h1>{item.id}</h1>
              <image src={`https://ltmnhom4.tk${item.image_url}`}></image>
            </ListGroup.Item>;
          })}
        </ListGroup>
  );
}
}
export default Purchase;
