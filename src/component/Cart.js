import * as React from "react";
import { Container, Form, Table } from "react-bootstrap";
import styles from "./styles/Cart.module.css";
import axios from "axios";
import ImageListItem from "@mui/material/ImageListItem";
import { useState, useEffect } from "react";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";

function Cart() {
  const [total, setTotal] = useState(0);
  const [data, setData] = useState([]);
  const [address, setAddress] = useState("");
  let i = 0;
  async function getItemFromCart() {
    const response = await axios({
      method: "get",
      url: "http://116.105.26.48:8080/api/auth/user/listFruitOfCart",
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
      for (let j = 0; j < response.data.data.length; j++) {
        i = i + response.data.data[j].price * response.data.data[j].quantity;
      }
      setTotal(i);
      console.log(total);
    }
  }

  async function order(inputData) {
    const response = await axios({
      method: "POST",
      url: "http://116.105.26.48:8080/api/auth/user/updateOrder",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("Token"),
      },
      data: {
        address: inputData.address,
      },
    });
    if (response.data !== null && response.data.status === "Thất bại !!!") {
      console.log(response.data.status);
    }

    if (response.data !== null && response.data.status === "Thành công !!!") {
      console.log("thanh cong ne");
    }
  }

  function handleChange(e) {
    e.preventDefault();
    setAddress(e.target.value);
  }

  useEffect(() => {
    getItemFromCart();
  }, []);

  return (
    <div className={styles.container}>
      {/* <div style={{display:"flex"}}>
      <ListItemText primary="Anh" />
      <ListItemText primary="ten" />
      <ListItemText primary="price" />
      <ListItemText primary="so luong" />
      </div> */}
      <Table bordered hover responsive="sm" style={{ float: "left" }}>
        <thead>
          <tr style={{ marginBottom: "20px" }}>
            <th
              style={{
                paddingLeft: "100px",
                paddingRight: "100px",
                paddingBottom: "25px",
                paddingTop: "25px",
              }}
            >
              Product Img
            </th>
            <th
              style={{
                paddingLeft: "100px",
                paddingRight: "100px",
                paddingTop: "25px",
                paddingBottom: "25px",
              }}
            >
              Name
            </th>
            <th
              style={{
                paddingLeft: "100px",
                paddingRight: "100px",
                paddingTop: "25px",
                paddingBottom: "25px",
              }}
            >
              Price
            </th>
            <th
              style={{
                paddingLeft: "100px",
                paddingRight: "100px",
                paddingTop: "25px",
                paddingBottom: "25px",
              }}
            >
              Quantity
            </th>
            <th
              style={{
                paddingLeft: "100px",
                paddingRight: "100px",
                paddingTop: "25px",
                paddingBottom: "25px",
              }}
            >
              Total
            </th>
          </tr>
        </thead>
        {total === 0 ? (
          <div style={{ textAlign: "center" }}>
            <h1>Chua co san pham nao trong gio hang</h1>
            <Link to="/">Quay lai</Link>
          </div>
        ) : (
          <tbody>
            {data.map((item) => (
              <tr style={{ borderBottom: "1px solid #000" }} key={item.id}>
                <td style={{ paddingBottom: "25px", paddingTop: "25px" }}>
                  <img
                    src={`http://116.105.26.48:8080${item.image_url}`}
                    alt=""
                    style={{
                      width: "150px",
                      height: "150px",
                      borderRadius: "20px",
                    }}
                  />
                </td>
                <td style={{ paddingBottom: "50px" }}>{item.fruit_name}</td>
                <td style={{ paddingBottom: "50px" }}>{item.price}</td>
                <td style={{ paddingBottom: "50px" }}>{item.quantity}</td>
                <td style={{ paddingBottom: "50px" }}>
                  {item.quantity * item.price} VND
                </td>
              </tr>
            ))}
          </tbody>
        )}
      </Table>
      <div styles={{ float: "right" }}>
        <div style={{ paddingTop: "20px" }}>
          <Form>
            <h1>Thanh toan</h1>
            <h2>Tong cong</h2>
            <h3>{total} VND</h3>
            <TextField
              id="address"
              name="address"
              label="Adress"
              value={address}
              onChange={handleChange}
              style={{
                marginBottom: "20px",
                float: "right",
                paddingRight: "135px",
              }}
            />
            <br />
            <Button
              variant="contained"
              onClick={order}
              style={{
                marginBottom: "20px",
                float: "right",
                
              }}
            >
              Order
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Cart;
