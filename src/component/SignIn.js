import React, { useState } from "react";
import { Formik } from "formik";
import * as yup from "yup";

import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/esm/Container";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { RiLoginBoxLine } from "react-icons/ri";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styles from "./styles/SignIn.module.css";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function SignIn() {
  const [resData, setResData] = useState(null);

  let navigate = useNavigate();

  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
  });

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

  async function postSignInInfo(inputData) {
    const response = await axios({
      method: "post",
      url: "https://ltmnhom4.tk/api/auth/login",
      data: {
        email: inputData.email,
        password: inputData.password,
      },
    });
    
    if (response.data !== null && response.data.status === "Thất bại !!!") {
      toastWarning(response.data.status);
      console.log(response.data.status)
    }

    if(response.data !==null && response.data.message === "email phải là một địa chỉ email hợp lệ."){
      toastWarning(response.data.message);
      console.log(response.data)
    }
    
    if (response.data !== null && response.data.status === "Thành công !!!") {
      setResData(response.data.status);
      toastSuccess(response.data.status);
      localStorage.setItem("User", response.data.name);
      localStorage.setItem("Email", response.data.email);
      localStorage.setItem("Token", response.data.access_token);
      if(response.data.email ==="vanthai22756@gmail.com"){
        navigate("/dashboard");
      }
      else{

        navigate("/");
      }
    }
  }

  

  return (
    <Container fluid className={styles.container}>
      <ToastContainer />
      <Formik
        validationSchema={schema}
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(values, { setSubmitting }) => {
          postSignInInfo(values);
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
            <Row className="mb-5 text-center">
              <h1 className="text-success">Sign In</h1>
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
                Email
              </Form.Label>
              <Form.Control
                type="email"
                name="email"
                required
                value={values.email}
                onChange={handleChange}
                isInvalid={touched.email && errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {/* Please enter a valid email */}
              </Form.Control.Feedback>
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
                Password
              </Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                isInvalid={touched.password && errors.password}
              />

              <Form.Control.Feedback type="invalid">
                {/* Please enter your password */}
              </Form.Control.Feedback>
            </Row>
            <Button
              type="submit"
              variant="contained"
              style={{
                marginBottom: "10px",
              }}
            >
              Sign In <RiLoginBoxLine />
            </Button>
            <div>
              <Link to="/forgot">
                <h4>Forgot password</h4>
              </Link>
            </div>
            <div>
              <Link to="/signup">
                <h4>Sign Up</h4>
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    </Container>
  );
}

export default SignIn;