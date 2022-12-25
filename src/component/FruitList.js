import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from "react-redux";
// import {getAllFruits} from "./Feature/Fruit/FruitSlice"
import Fruit from './Fruit';
import axios from 'axios';
import './styles/FruitList.css';
import { Button } from 'react-bootstrap';

import { Card, Col, Row } from 'antd';

function FruitList() {


  const [resData, setResData] = useState([]);

  async function getAllFruit() {
    const response = await axios({
      method: 'get',
      url: 'https://ltmnhom4.tk/api/auth/getAllFruit',
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('Token'),
      },
    });
    if (response.data != null && response.data.status === 'Thất bại !!!') {
      console.log(response.data.status);
    }
    if (response.data != null && response.data.status === 'Thành công !!!') {
      setResData(response.data.data);
    }
  }

  async function delFruit(id) {
    const res = await axios({
      method: 'delete',
      url: 'https://ltmnhom4.tk/api/auth/admin/deleteFruit/' + id,
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('Token'),
      },
    });
    if (res.data.status === 'Thành công !!!') {
      alert('Thành công !!!');
    }
    if (res.data.status === 'Thất bại !!!') {
      alert('Thất bại !!!');
    }
  }

  useEffect(() => {
    getAllFruit();
  },[]);

  return (
    <div className="card-gridd" style={{paddingTop: '16px', paddingLeft: '10px'}}>
      <Row gutter={16}>
        {resData.map((item) => {
          return (
            <Col span={8} key={item.id}>
              <Card
                hoverable
                title={item.id}
                extra={
                  <Button
                    type="button"
                    className="fixx"
                    onClick={() => delFruit(`${item.id}`)}
                  >
                    X
                  </Button>
                }
              >
                <div className="img-wrapper">
                  <img
                    className="anh"
                    src={`https://ltmnhom4.tk${item.image_url}`}
                    alt=""
                  />
                </div>
                <div className="namee">
                  <h4
                    className="fixx"
                    style={{
                      width: "150px",
                      textAlign: "left",
                      fontSize: "18px",
                    }}
                  >
                    Tên:{" "}
                  </h4>
                  <h2 className="fixx">{item.fruit_name}</h2>
                </div>
                <div
                  className="price"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <h4
                    className="fixx"
                    style={{
                      width: "150px",
                      textAlign: "left",
                      fontSize: "18px",
                    }}
                  >
                    Giá:
                  </h4>
                  <h4
                    className="fixx"
                    style={{ width: "100%", color: "#007aff" }}
                  >
                    {item.price}
                  </h4>
                </div>
                <div
                  className="amount"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <h4
                    className="fixx"
                    style={{
                      width: "150px",
                      textAlign: "left",
                      fontSize: "18px",
                    }}
                  >
                    Số lượng:
                  </h4>
                  <h4
                    className="fixx"
                    style={{ width: "100%", color: "#007aff" }}
                  >
                    {" "}
                    {item.amount}
                  </h4>
                </div>
                <div
                  className="total "
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <h4
                    className="fixx"
                    style={{
                      width: "150px",
                      textAlign: "left",
                      fontSize: "18px",
                    }}
                  >
                    Mô Tả:
                  </h4>
                  <h4
                    className="fixx"
                    style={{ width: "100%", color: "#007aff" }}
                  >
                    {item.description}
                  </h4>
                </div>
                <div
                  className="total"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <h4
                    className="fixx"
                    style={{
                      width: "150px",
                      textAlign: "left",
                      fontSize: "18px",
                    }}
                  >
                    Nhãn Hàng:
                  </h4>
                  <h4
                    className="fixx"
                    style={{ width: "100%", color: "#007aff" }}
                  >
                    {item.brand}
                  </h4>
                </div>
              </Card>
            </Col>
          );
        })}
      </Row>
      <div className="site-card-wrapper">
      </div>
    </div>
  );
}

export default FruitList;
