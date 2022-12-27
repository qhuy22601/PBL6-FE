import React, { useEffect, useState } from "react";
import styles from "./styles/Purchase.module.css";
import axios from "axios";
import ListGroup from "react-bootstrap/ListGroup";
import { dividerClasses } from "@mui/material";
import { Card, Col, Row, Space, Table, Tag } from 'antd';
const { Column, ColumnGroup } = Table;


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

  if(loading ==true){
    return (
        <div>Loading...</div>
    );
  }

  return (
    <Table dataSource={data}>
      <Column title="Order Id" dataIndex="id" key="id" />
      <Column title="Order Date" dataIndex="date" key="date" />
    <Column title="Address" dataIndex="address" key="address" />
    <Column title="Total Bill" dataIndex="total_bill" key="total_bill" />
  </Table>
  );
}
export default Purchase;
