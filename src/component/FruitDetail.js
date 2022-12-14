import { useContext, useState, useEffect } from "react";
import AppContext from "./Fruit";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import HeaderAfter from "./HeaderAfter";
import Header from "./Header"

import Typography from "@mui/material/Typography";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import styles from "./styles/FruitDetail.module.css";
import { NumericFormat } from "react-number-format";

function FruitDetail() {
  const { id } = useParams();
  const [checkSignin, setCheckSignin] = useState(localStorage.getItem("User"));

  const [data, setData] = useState({});
  const [quantity, setQuantity] = useState(1);

  async function getFruitById() {
    const res = await axios({
      method: "GET",
      url: "http://localhost:8000/api/auth/admin/getFruitFollowId/" + id,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("Token"),
      },
    });
    if (res.data !== null && res.data.status === "Thất bại !!!") {
      alert("Error");
    }
    if (res.data !== null && res.data.status === "Thành công !!!") {
      setData(res.data.data);
    }
  }

  useEffect(() => {
    getFruitById();
  }, []);

  function onChange(e) {
    e.preventDefault();
    setQuantity(e.target.value);
  }

  function addToBag() {}

  function onAddClicked() {
    setQuantity(quantity + 1);
  }

  function onRemoveClicked() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  return (
    <div className={styles.container}>
      <div className="head">
        {checkSignin !== null ? <HeaderAfter></HeaderAfter> : <Header></Header>}
      </div>
      <div className={styles.columnImage}>
        <img
          src={`http://localhost/pbl6/${data.image_url}`}
          className={styles.img}
        ></img>
      </div>
      <div className={styles.columnDetail}>
        <div className={styles.name}>{data.fruit_name}</div>
        <div className={styles.desc}>{data.description}</div>
        <div className={styles.brand}>{data.brand}</div>
        <div className={styles.price}>{data.price}</div>
        <div className={styles.amountForm}>
          <Button className={styles.decre} onClick={onRemoveClicked}>
            -
          </Button>
          <input
            className={styles.amountInput}
            value={quantity}
            onChange={onChange}
          ></input>
          <Button className={styles.incre} onClick={onAddClicked}>
            +
          </Button>
        </div>
        <div className={styles.button}>
          <Button className={styles.addCart}>Add To Cart</Button>
        </div>
      </div>
    </div>
  );
}

export default FruitDetail;
