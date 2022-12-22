import React, { useState } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import axios from "axios";
import styles from "./styles/SignIn.module.css";

import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "@mui/material/Button";
import Container from "react-bootstrap/esm/Container";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
function Reset(){ 
  let navigate = useNavigate();
  const[token, setToken]= useState("");

  

    const schema = yup.object().shape({
      password: yup.string().required()
    });
  
      async function handleSubmit(e){
          const response = await axios({
              method: "post",
              url: `http://116.105.26.48/api/auth/reset-password/${token}`,
              data:{
                password: e.password,
              },
          });
         if(response.data !=null && response.data.status!=="Thất bại !!!"){
          showWarningToast("ko thanh cong")
         }
         if(response.data !=null && response.data.status==="Thành công !!!"){
          navigate("/signin")
      }
      }
  
      function showWarningToast(inputMessage) {
          toast.warn("Invalid pass", {
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          console.log("toast");
        }
  
      return (
        <Container fluid className={styles.container}>
          <ToastContainer />

          <Formik
            validationSchema={schema}
            initialValues={{
              password: "",
            }}
            onSubmit={(values, { setSubmitting }) => {
              handleSubmit(values);
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
                className={styles.formContainer}
              >
                <Row
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    paddingBottom: "12px",
                  }}
                >
                  <Form.Label
                    style={{
                      paddingRight: "10px",
                      width: "140px",
                      textAlign: "left",
                      paddingLeft: "10px",
                    }}
                  >
                    Password
                  </Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    isInvalid={touched.password && errors.password}
                  />
                  <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                </Row>
                <Row
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    paddingBottom: "12px",
                  }}
                >
                  <Form.Label
                    style={{
                      paddingRight: "10px",
                      width: "140px",
                      textAlign: "left",
                      paddingLeft: "10px",
                    }}
                  >
                    Token
                  </Form.Label>
                <Form.Control
                  type="text"
                  name="token"
                  value={token}
                  onChange={(e) => setToken(e.target.value)}
                />
                </Row>
                <Button type="submit" variant="contained">
                  Change
                </Button>
              </Form>
            )}
          </Formik>
        </Container>
      );
}
export default Reset;
