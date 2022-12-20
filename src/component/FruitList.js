import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {getAllFruits} from "./Feature/Fruit/FruitSlice"
import Fruit from "./Fruit";
import axios from "axios";
import "./styles/FruitList.css";
import { Button } from "react-bootstrap";


function FruitList() {
  //   const dispatch = useDispatch();
  //   const storeAllFruit = useSelector(
  //     (state) => state.fruitReducer.getData
  //   );

  //   useEffect(() => {
  //       if (localStorage.getItem("Token") === null) {
  //         navigate("/unauthorized");
  //       }
  //       dispatch(getAllFruits());
  // }, []);

  //   return(
  //     <div>
  //       {storeAllFruit ?(
  //           storeAllFruit.map((fruits) =>{
  //             return (
  //               <Fruit
  //                 key ={fruits.id}
  //                 id = {fruits.id}
  //                 fruit_name = {fruits.fruit_name}
  //                 image_url = {fruits.image_url}
  //                 price = {fruits.price}
  //                 description = {fruits.description}
  //                 brand = {fruits.brand}
  //                 amount = {fruits.amount}
  //               />
  //             );
  //           })
  //       ):(
  //         <span></span>
  //       )
  //       }
  //     </div>
  //   );

  const [resData, setResData] = useState([]);

  async function getAllFruit() {
    const response = await axios({
      method: "get",
      url: "http://116.105.26.48/api/auth/admin/getAllFruit",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("Token"),
      },
    });
    if (response.data != null && response.data.status === "Thất bại !!!") {
      console.log(response.data.status);
    }
    if (response.data != null && response.data.status === "Thành công !!!") {
      setResData(response.data.data);
    }
  }

 

  async function delFruit(id){
    const res = await axios({
      method: "delete",
      url: "http://116.105.26.48/api/auth/admin/deleteFruit/" + id,
      headers:{
        Authorization: "Bearer " + localStorage.getItem("Token"),
      },
    });
    if(res.data.status ==="Thành công !!!"){
      alert("Thành công !!!");
    }
    if(res.data.status ==="Thất bại !!!"){
      alert("Thất bại !!!");
    }
  }

   useEffect(() => {
     getAllFruit();
   }, [resData]);

  return (
    <div className="card-gridd">
      {resData.map((item) => {
        return (
          <div className="buying-item" key={item.id}>
            <div className="img-wrapper">
              <img
                className="anh"
                src={`http://116.105.26.48${item.image_url}`}
              />
            </div>
            <div className="img-wrapper">
              <h4 className="fixx">id </h4>
              <h4 className="fixx">{item.id}</h4>
            </div>
            <div className="namee">
              <h4 className="fixx">Tên </h4>
              <h4 className="fixx">{item.fruit_name}</h4>
            </div>
            <div className="price">
              <h4 className="fixx">Giá </h4>
              <h4 className="fixx">{item.price}</h4>
            </div>
            <div className="amount">
              <h4 className="fixx">Số lượng </h4>
              <h4 className="fixx"> {item.amount}</h4>
            </div>
            <div className="total">
              <h4 className="fixx">mo ta</h4>
              <h4 className="fixx">{item.description}</h4>
            </div>
            <div className="total">
              <h4 className="fixx">nhan hang</h4>
              <h4 className="fixx">{item.brand}</h4>
            </div>
            <div className="total">
              <Button type="button" className="fixx" onClick={()=>delFruit(`${item.id}`)}>X</Button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default FruitList;
