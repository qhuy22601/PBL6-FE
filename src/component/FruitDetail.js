import { useContext, useState, useEffect } from "react";
import AppContext from "./Fruit";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Button from "@mui/material/Button";
import HeaderAfter from "./HeaderAfter";
import Header from "./Header"
import Form from "react-bootstrap/Form";

import styles from "./styles/FruitDetail.module.css";

function FruitDetail() {
  const { id } = useParams();
  const [checkSignin, setCheckSignin] = useState(localStorage.getItem("User"));

  const [data, setData] = useState({});
  const [quantity, setQuantity] = useState(1);

  async function getFruitById() {
    const res = await axios({
      method: "GET",
      url: "http://116.105.26.48/api/auth/getFruitFollowId/" + id,
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

async function addToBag() {
  const res = await axios({
    method: "post",
    url: "http://116.105.26.48/api/auth/user/addFruitCart",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("Token"),
    },
    data: {
      fruit_id: id,
      quantity: quantity,
    },
  });
  if (res.data !== null && res.data.status === "Thất bại !!!") {
    console.log(res.data.status);
  }

  if (res.data !== null && res.data.status === "Thành công !!!") {
    console.log(res.data.status);
  }
}

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
      <div className={styles.head}>
        {checkSignin !== null ? <HeaderAfter></HeaderAfter> : <Header></Header>}
      </div>
      <div className={styles.columnImage}>
        <img
          src={`http://116.105.26.48${data.image_url}`}
          className={styles.img}
        ></img>
      </div>
      <div className={styles.columnDetail}>
        <div className={styles.name}>{data.fruit_name}</div>
        <br />
        {/* <div className={styles.desc}>{data.description}</div> */}
        <div className={styles.brand}>Xuất xứ: {data.brand}</div>
        <br />
        <div className={styles.price}>{data.price} VNĐ/Kg</div>
        <br />
        <div className={styles.amountForm}>
          <Button
            variant="outlined"
            className={styles.decre}
            onClick={onRemoveClicked}
          >
            -
          </Button>
          <input
            className={styles.amountInput}
            value={quantity}
            onChange={onChange}
          ></input>
          <Button
            variant="outlined"
            className={styles.incre}
            onClick={onAddClicked}
          >
            +
          </Button>
        </div>
        <br />
        <div className={styles.button}>
          <Button
            variant="contained"
            className={styles.addCart}
            onClick={addToBag}
          >
            Add To Cart
          </Button>
        </div>
      </div>
    </div>
  );
}

export default FruitDetail;
