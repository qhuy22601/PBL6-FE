import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import axios from "axios";
import imageCompression from "browser-image-compression";
import { Formik } from "formik";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as yup from "yup";
// import "./styles/FileBtn.css";
import styles from "./styles/SignIn.module.css";

function SignUp() {
  // const [file, setFile] = useState(null);
  // const [file64String, setFile64String] = useState(null);
  // const [file64StringWithType, setFile64StringWithType] = useState(null);
  // const [userRole, setUserRole] = useState("user");
  const [resData, setResData] = useState(null);

  let navigate = useNavigate();

  const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
    password_confirmation: yup.string().required(),
  });

  async function postSignUpInfo(inputData) {
    console.log("click");
    const response = await axios({
      method: "post",
      url: "http://116.105.26.48/api/auth/signup",
      data: {
        name: inputData.name,
        email: inputData.email,
        password: inputData.password,
        password_confirmation: inputData.password_confirmation,
      },
    });

    // if (response.data !== null) {
    //   setResData(response.data);
    // }

    if (response.data !== null && response.data.status === "fails") {
      showWarningToast(response.data.status);
    }

    if (response.data !== null && response.data.status === "success") {
      showWarningToast(response.data.status);

      navigate("/signin");
    }
  }
  // function onUploadFileChange(e) {
  //   setFile64String(null);
  //   if (e.target.files < 1 || !e.target.validity.valid) {
  //     return;
  //   }

  //   compressImageFile(e);
  // }

  // function fileToBase64(file, cb) {
  //   const reader = new FileReader();
  //   reader.readAsDataURL(file);
  //   reader.onload = function () {
  //     cb(null, reader.result);
  //   };
  //   reader.onerror = function (error) {
  //     cb(error, null);
  //   };
  // }

  // async function compressImageFile(event) {
  //   const imageFile = event.target.files[0];

  //   const options = {
  //     maxWidthOrHeight: 250,
  //     useWebWorker: true,
  //   };
  //   try {
  //     const compressedFile = await imageCompression(imageFile, options);
  //     // input file is compressed in compressedFile, now write further logic here

  //     fileToBase64(compressedFile, (err, result) => {
  //       if (result) {
  //         setFile(result);
  //         //   console.log(file);
  //         //   console.log(String(result.split(",")[1]));
  //         setFile64StringWithType(result);
  //         setFile64String(String(result.split(",")[1]));
  //       }
  //     });
  //   } catch (error) {
  //     setFile64String(null);
  //     // console.log(error);
  //   }
  // }

  function showWarningToast(inputMessage) {
    toast.warn(inputMessage, {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }

  return (
    <Container fluid className={styles.container}>
      <ToastContainer />
      <Formik
        validationSchema={schema}
        initialValues={{
          name: "",
          email: "",
          password: "",
          password_confirmation: "",
        }}
        onSubmit={(values, { setSubmitting }) => {
          postSignUpInfo(values);
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
              <h1 className="text-success">Sign Up</h1>
            </Row>
            <Row>
              <Form.Group
                className={styles.formGroup}
                as={Col}
                md="12"
                controlId="signupname"
              >
                <Form.Label className={styles.formLabel}>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  isInvalid={touched.name && errors.name}
                />
                <Form.Control.Feedback type="invalid">
                  {/* Nhập Name */}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row>
              <Form.Group
                className={styles.formGroup}
                as={Col}
                md="12"
                controlId="signupemail"
              >
                <Form.Label className={styles.formLabel}>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  isInvalid={touched.email && errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {/* Nhập Email */}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Row>
              <Form.Group
                className={styles.formGroup}
                as={Col}
                md="12"
                controlId="signInPassword"
              >
                <Form.Label className={styles.formLabel}>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  isInvalid={touched.password && errors.password}
                />

                <Form.Control.Feedback type="invalid">
                  {/* Password */}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Row>
              <Form.Group
                className={styles.formGroup}
                as={Col}
                md="12"
                controlId="signInPassword_comfirm"
              >
                <Form.Label className={styles.formLabel}>
                  Confirm Password
                </Form.Label>
                <Form.Control
                  type="password"
                  name="password_confirmation"
                  value={values.password_confirmation}
                  onChange={handleChange}
                  isInvalid={
                    touched.password_confirmation &&
                    errors.password_confirmation
                  }
                />

                <Form.Control.Feedback type="invalid">
                  {/* Confirm Password */}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Button type="submit" variant="success">
              Sign Up
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
}

export default SignUp;
