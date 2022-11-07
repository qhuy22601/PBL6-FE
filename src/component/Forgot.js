import React, { useState } from "react";
import { Formik } from "formik";
import * as yup from "yup";

import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { RiLoginBoxLine } from "react-icons/ri";

import styles from "./styles/SignIn.module.css";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

function Forgot(){
    
  let navigate = useNavigate();

  const schema = yup.object().shape({
    email: yup.string().email().required()
  });

    async function submit(e){
        const response = await axios({
            method: "post",
            url: "http://localhost:8000/api/auth/reset-password",
            data:{
                email: e.email
            },
        });
       if(response.data !=null && response.data.message!=="Chúng tôi đã gửi qua e-mail liên kết đặt lại mật khẩu của bạn"){
        showWarningToast("ko thanh cong")
       }
       if(response.data !=null && response.data.message==="Chúng tôi đã gửi qua e-mail liên kết đặt lại mật khẩu của bạn"){
        navigate("/reset")
        console.log("đã gửi")
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

    return(
        <Container fluid className={styles.container}>
        <ToastContainer />
        <Formik
          validationSchema={schema}
          initialValues={{
            email: "",
          }}
          onSubmit={(values, {setSubmitting}) => {
            submit(values);
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
              <Row className="mb-3">
                <Form.Group as={Col} md="12" controlId="signInEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    isInvalid={touched.email && errors.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    {/* Please enter a valid email */}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
             
              <Button type="submit" variant="success">
                Send Mail 
              </Button>
           
            
            </Form>
          )}
        </Formik>
        
      </Container>
    );
}

export default Forgot;