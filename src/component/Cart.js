import * as React from "react";
import { Container, Form, Table } from "react-bootstrap";
import styles from "./styles/Cart.module.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Cart() {
  const [total, setTotal] = useState(0);
  const [data, setData] = useState([]);
  const [address, setAddress] = useState(null);
  let i = 0;

  function toastSuccess(message){
    toast.success(message, {
      position: toast.POSITION.TOP_RIGHT
  });
  }

  function toastWarning(message){
    toast.warning(message, {
      position: toast.POSITION.TOP_RIGHT
  });
  }

  async function getItemFromCart() {
    const response = await axios({
      method: "get",
      url: "https://ltmnhom4.tk/api/auth/user/listFruitOfCart",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("Token"),
      },
    });
    if (response.data !== null && response.data.status === "Thất bại !!!") {
      console.log(response.data.status);
    }

    if (response.data !== null && response.data.status === "Thành công !!!") {
      console.log(response.data.status)
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
      url: "https://ltmnhom4.tk/api/auth/user/updateOrder",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("Token"),
      },
      data: {
        address: inputData.address,
      },
    });
    if (response.data !== null && address=== null ) {
      toastWarning("Thất bại !!!")
    }

    if (response.data !== null && response.data.status === "Thành công !!!" && address!==null) {
      toastSuccess(response.data.status)
      window.location.reload(false);
    }
  }

  function handleChange(e) {
    e.preventDefault();
    setAddress(e.target.value);
  }

 function  handle(event) {
    if (address.length > 0){
      toastWarning("Thất bại !!!")
    }
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
      <ToastContainer />
      <Table bordered hover responsive="sm" style={{ float: "left" }}>
        <thead>
          <tr style={{ marginBottom: "20px" }}>
            <th
              style={{
                paddingLeft: "50px",
                paddingRight: "50px",
                paddingBottom: "25px",
                paddingTop: "25px",
              }}
            >
              Product Img
            </th>
            <th
              style={{
                paddingLeft: "50px",
                paddingRight: "50px",
                paddingTop: "25px",
                paddingBottom: "25px",
              }}
            >
              Name
            </th>
            <th
              style={{
                paddingLeft: "50px",
                paddingRight: "50px",
                paddingTop: "25px",
                paddingBottom: "25px",
              }}
            >
              Price
            </th>
            <th
              style={{
                paddingLeft: "50px",
                paddingRight: "50px",
                paddingTop: "25px",
                paddingBottom: "25px",
              }}
            >
              Quantity
            </th>
            <th
              style={{
                paddingLeft: "50px",
                paddingRight: "50px",
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
                    src={`https://ltmnhom4.tk${item.image_url}`}
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
              disabled={!address}
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
