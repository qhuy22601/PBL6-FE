import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { Formik, replace } from "formik";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import * as yup from "yup";
import styles from "./styles/SignIn.module.css";

function SignIn() {
  let navigate = useNavigate();
  const users = [
  {
    phoneNumber: '0911560635',
    password: '191916823'
  },
  {
    phoneNumber:'0123',
    password:'admin'
  }
];

const [phoneNumber, setPhoneNumber] = useState("");
const [password, setPassword] = useState("");

const handlePhone =(e)=>{
  setPhoneNumber(e.target.value);
}

const handlePass = (e)=>{
  setPassword(e.target.value);
}


function validateForm(){
   let returnData = {
      error : false,
      msg: ''
    }
    //Check password
    if(password.length < 2) {
      returnData = {
        error: true,
        msg: 'mk dai hon 2 ki tu'
      }
    }
    return returnData;
}

const handleSubmit = (e) =>{
  e.preventDefault();
  const validate = validateForm();
    if (validate.error) {
      alert(validate.msg)
    }else if(phoneNumber === '0911560635' && password === '191916823') {
      alert("Login successful");
      localStorage.setItem("phoneNumber", phoneNumber)
      navigate("/mainpage");
    }else {
      alert("sai tk mk");
    }
  

}


  // const [resData, setResData] = useState(null);

  // let navigate = useNavigate();

  // const schema = yup.object().shape({
  //   phoneNumber: yup.string().required(),
  //   password: yup.string().required(),
  // });

  // async function postSignInInfo(inputData) {


  //   if(inputData.email == "admin" && inputData.password == "admin") {
  //     navigate("/mainapge");
  //   }



    // const response = await axios({
    //   method: "post",
    //   url: "/api/auth/users/signin",
    //   data: {
    //     email: inputData.email,
    //     password: inputData.password,
    //   },
    // });

    // if (response.data !== null && response.data.status === "that bai") {
    //   showWarningToast(response.data.message);
    // }

    // if (response.data !== null && response.data.status === "thanh cong") {
    //   setResData(response.data);

    //   localStorage.setItem("UserId", response.data.payload.user.id);
    //   localStorage.setItem("UserFirstName",response.data.payload.user.firstName);
    //   localStorage.setItem("UserLastName", response.data.payload.user.lastName);
    //   localStorage.setItem("UserEmail", response.data.payload.user.email);
    //   localStorage.setItem("UserAvata", response.data.payload.user.avata);
    //   localStorage.setItem("UserName",response.data.payload.user.username);
    //   localStorage.setItem("UserAddress", response.data.payload.user.address);
    //   localStorage.setItem("UserPhoneNumber",response.data.payload.user.phoneNumber);
    //   localStorage.setItem("UserBirthDate",response.data.payload.user.birthDate);
    //   localStorage.setItem("Token", response.data.payload.token);
    //   navigate("/newsfeed", {replace: true});
    // }
  // }

  function showWarningToast(inputMessage) {
    toast.warn("Invalid phoneNumber or password", {
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

      
      {/* <Formik
        validationSchema={schema}
        initialValues={{
          phoneNumber: "",
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
            <Grid>
              <Paper className={styles.paper_logo} elevation={10}>
                <Grid className={styles.grid_logo}>
                  <h2> Sign In </h2>
                </Grid>
                <Form.Group
                  className={styles.formGroup}
                  as={Col}
                  md="12"
                  controlId="signInPhoneNumber"
                >
                  <Form.Label className={styles.formLabel}> SDT </Form.Label>
                  <Form.Control
                    className="text_field"
                    type="text"
                    name="phoneNumber"
                    value={values.phoneNumber}
                    onChange={handleChange}
                    isInvalid={touched.phoneNumber && errors.phoneNumber}
                    placeholder="Enter PhoneNumber"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                 
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                  className={styles.formGroup}
                  as={Col}
                  md="12"
                  controlId="signInPassword"
                >
                  <Form.Label className={styles.formLabel}>Password</Form.Label>
                  <Form.Control
                    className="text_field"
                    type="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    isInvalid={touched.password && errors.password}
                    placeholder="Enter username"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                 
                  </Form.Control.Feedback>
                </Form.Group>
                <Button
                  className={styles.btnSubmit}
                  type="submit"
                  color="primary"
                  variant="contained"
                >
                  Sign in
                </Button>
                <div className="link">
                  <Typography>
                    <Link to="/forgot"> Forgot password ? </Link>
                  </Typography>
                  <Typography>
                    Do you have an account ?
                    <Link to="/signup"> Sign Up ? </Link>
                  </Typography>
                </div>
              </Paper>
            </Grid>
          </Form>
        )}
      </Formik> */}



        <Form  onSubmit={handleSubmit} className={styles.round}>
        <Form.Group
                  className={styles.formGroup}
                  as={Col}
                  md="12"
                  controlId="signInPhoneNumber"
                >
                  <Form.Label className={styles.formLabel}> Phone Number</Form.Label>
                  <Form.Control
                    className="text_field"
                    type="text"
                    name="phoneNumber"
                    value={phoneNumber}
                    onChange={handlePhone}
                    placeholder="Enter PhoneNumber"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                 
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                  className={styles.formGroup}
                  as={Col}
                  md="12"
                  controlId="signInPassword"
                >
                  <Form.Label className={styles.formLabel}>Password</Form.Label>
                  <Form.Control
                    className="text_field"
                    type="password"
                    name="password"
                    value={password}
                    onChange={handlePass}
                    placeholder="Enter password"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                 
                  </Form.Control.Feedback>
                </Form.Group>
                <Button
                  className={styles.btnSubmit}
                  type="submit"
                  color="primary"
                  variant="contained"
                >
                  Sign in
                </Button>
        </Form>
    </Container>
  );
}

export default SignIn;
