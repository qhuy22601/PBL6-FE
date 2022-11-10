import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import * as yup from "yup";
import imageCompression from "browser-image-compression";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { RiLoginBoxLine } from "react-icons/ri";
import Fruit from "./Fruit";

import "./styles/AdminProd.css";

import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { Token } from "@mui/icons-material";
import FruitList from "./FruitList";


function AdminProd(){

   const [img, setImg] = useState(null);
    let navigate = useNavigate();

  // const schema = yup.object().shape({
  //   fruit_name: yup.string().required(),
  //   // image_url: yup.mixed(),
  //   price:yup.string(),
  //   description:yup.string(),
  //   brand:yup.string(),
  //   amount:yup.string()
  // });


  function upload(e){
    e.preventDefault();
    console.log(e.target.files[0])
    setImg(e.target.files[0])
  }

  async function createFruit(inputData) {
    const fdata = new FormData();
    fdata.append("image_url", img);
    fdata.append("fruit_name", inputData.fruit_name);
    fdata.append("price", inputData.price);
    fdata.append("brand", inputData.brand);
    fdata.append("amount", inputData.amount);
    fdata.append("description", inputData.description);
    const response = await axios({
      method: "post",
      url: "http://localhost:8000/api/auth/admin/createFruit",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("Token"),
        'Content-Type': "multipart/form-data"
      },
      data: fdata,
    });
    
    if (response.data !== null && response.data.status === "Thất bại !!!") {
      showWarningToast(response.data.status);
      console.log(response.data.status)
    }
    
    if (response.data !== null && response.data.status === "Thành công !!!") {
    console.log("thanh cong ne")
    }
  }
  
  function showWarningToast(inputMessage) {
    toast.warn("Invalid email", {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    console.log("toast");
  }

  async function updateFruit(inputData){
    const response = await axios({
      method:"post",
      url:"http://127.0.0.1:8000/api/auth/admin/updateFruit",
      headers:{
        Authorization: "Bearer "+ localStorage.getItem("Token"),
      },
      data:{
        id: inputData.id,
        amount: inputData.amount,
      }
    });
    if(response.data.status === "Thành công !!!" && response.data!=null){
      console.log("ok thanh cong update")
    }
    if(response.data.status === "Thất Bại !!!" && response.data!=null){
      showWarningToast(response.data.status)
    }
  }


  
    return(
          <Container className="">
      <ToastContainer />
      <div className="dual">
      <Formik
        // validationSchema={schema}
        initialValues={{
          fruit_name: "",
          description: "",
          price: "",
          brand: "",
          // image_url: "",
          amount: "",
          
        }}
        onSubmit={(values, { setSubmitting }) => {
          createFruit(values);
          setSubmitting(false);
        }}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          touched,
          isInValid,
          errors,
        }) => (
          <Form
            noValidate
            onSubmit={handleSubmit}
            className=""
          >
            <Grid>
                <Row>
                  <Form.Group
                    className=""
                    as={Col}
                    md="12"
                    controlId="fruit_name"
                  >
                    <Form.Label className="">Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="fruit_name"
                      value={values.fruit_name}
                      onChange={handleChange}
                      isInvalid={touched.fruit_name && errors.fruit_name}
                    />
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group
                    className=""
                    as={Col}
                    md="12"
                    controlId="price"
                  >
                    <Form.Label className="">Price</Form.Label>
                    <Form.Control
                      type="text"
                      name="price"
                      value={values.price}
                      onChange={handleChange}
                      isInvalid={touched.price && errors.price}
                    />
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group
                    className=""
                    as={Col}
                    md="12"
                    controlId="description"
                  >
                    <Form.Label className="">Description</Form.Label>
                    <Form.Control
                      type="text"
                      name="description"
                      value={values.description}
                      onChange={handleChange}
                      isInvalid={touched.description && errors.description}
                    />
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group
                    className=""
                    as={Col}
                    md="12"
                    controlId="brand"
                  >
                    <Form.Label className="">brand</Form.Label>
                    <Form.Control
                      type="text"
                      name="brand"
                      value={values.brand}
                      onChange={handleChange}
                      isInvalid={touched.brand && errors.brand}
                    />
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group
                    className=""
                    as={Col}
                    md="12"
                    controlId="amount"
                  >
                    <Form.Label className="">
                    Amount
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="amount"
                      value={values.amount}
                      onChange={handleChange}
                      isInvalid={touched.amount && errors.amount}
                    />

                    </Form.Group>
                
                    <Form.Group>
                      <Form.Label className="">
                        {" "}
                        Image
                        <Form.Control
                          className="inside"
                          name="image"
                          id="image"
                          type="file"
                          accept=".jpg, .jpeg, .png"
                          onChange={upload}
                          
                        />
                        {/* <CloudUploadOutlinedIcon /> */}
                      </Form.Label>
                    </Form.Group>
            
                </Row>
                <Button type="submit" variant="primary">
                  Create
                </Button>
            </Grid>
          </Form>
        )}
      </Formik>


      <Formik
        // validationSchema={schema}
        initialValues={{
          id:"",
          amount: "",
          
        }}
        onSubmit={(values, { setSubmitting }) => {
          updateFruit(values);
          setSubmitting(false);
        }}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          touched,
          isInValid,
          errors,
        }) => (
          <Form
            noValidate
            onSubmit={handleSubmit}
            className=""
          >
            <Grid>
               
                <Row>
                  <Form.Group
                    className=""
                    as={Col}
                    md="12"
                    controlId="id"
                  >
                    <Form.Label className="">Id</Form.Label>
                    <Form.Control
                      type="text"
                      name="id"
                      value={values.id}
                      onChange={handleChange}
                      isInvalid={touched.id && errors.id}
                    />
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group
                    className=""
                    as={Col}
                    md="12"
                    controlId="amount"
                  >
                    <Form.Label className="">
                    Amount
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="amount"
                      value={values.amount}
                      onChange={handleChange}
                      isInvalid={touched.amount && errors.amount}
                    />

                    </Form.Group>
                
                 
            
                </Row>
                <Button type="submit" variant="primary">
                  update
              </Button>
            </Grid>
          </Form>
        )}
      </Formik>
      </div>
      <div>
          <FruitList/>
      </div>
    </Container>
    );
}

export default AdminProd;