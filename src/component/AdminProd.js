import Grid from '@mui/material/Grid';
import { Formik } from 'formik';
import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

import './styles/AdminProd.css';

import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import FruitList from './FruitList';

function AdminProd() {
  const [img, setImg] = useState(null);

  let navigate = useNavigate()
  function upload(e) {
    e.preventDefault();
    console.log(e.target.files[0]);
    setImg(e.target.files[0]);
  }

  async function createFruit(inputData) {
    const fdata = new FormData();
    fdata.append('image_url', img);
    fdata.append('fruit_name', inputData.fruit_name);
    fdata.append('price', inputData.price);
    fdata.append('brand', inputData.brand);
    fdata.append('amount', inputData.amount);
    fdata.append('description', inputData.description);
    const response = await axios({
      method: 'post',
      url: 'https://ltmnhom4.tk/api/auth/admin/createFruit',
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('Token'),
        'Content-Type': 'multipart/form-data',
      },
      data: fdata,
    });

    if (response.data !== null && response.data.status === 'Thất bại !!!') {
      showWarningToast(response.data.status);
      console.log(response.data.status);
    }

    if (response.data !== null && response.data.status === 'Thành công !!!') {
      console.log('thanh cong ne');
      window.location.reload(false);
    }
  }

  function showWarningToast(inputMessage) {
    toast.warn('Invalid email', {
      position: 'bottom-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
    console.log('toast');
  }

  async function checkFruit(){
     const fdata = new FormData();
     fdata.append("image", img);
     const response = await axios({
       mode: "no-cors",
       method: "POST",
       url: "https://cnttlmkk19.online/upload-image/",
       headers: {
         "Content-Type": "multipart/form-data",
       },
       data: fdata,
     });
     alert(response.data)
    }

  async function updateFruit(inputData) {
    const response = await axios({
      method: 'post',
      url: 'https://ltmnhom4.tk/api/auth/admin/updateFruit',
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('Token'),
      },
      data: {
        id: inputData.idd,
        amount: inputData.amountt,
      },
    });
    if (response.data.status === 'Thành công !!!' && response.data != null) {
      console.log('ok thanh cong update');
    }
    if (response.data.status === 'Thất Bại !!!' && response.data != null) {
      showWarningToast(response.data.status);
    }
  }

  return (
    <Container className="content-product">
      <ToastContainer />
      <div className="dual">
        <Formik
          initialValues={{
            fruit_name: "",
            description: "",
            price: "",
            brand: "",
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
            errors,
          }) => (
            <Form noValidate onSubmit={handleSubmit} className="">
              <div
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
                  Name
                </Form.Label>
                <TextField
                  fullWidth
                  id="fruit_name"
                  name="fruit_name"
                  label="fruit_name"
                  value={values.fruit_name}
                  onChange={handleChange}
                />
              </div>
              <div
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
                  Price
                </Form.Label>
                <TextField
                  fullWidth
                  id="price"
                  name="price"
                  label="price"
                  value={values.price}
                  onChange={handleChange}
                />
              </div>
              <div
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
                  Description
                </Form.Label>
                <TextField
                  fullWidth
                  id="description"
                  name="description"
                  label="description"
                  value={values.description}
                  onChange={handleChange}
                />
              </div>
              <div
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
                  Brand
                </Form.Label>
                <TextField
                  fullWidth
                  id="brand"
                  name="brand"
                  label="brand"
                  value={values.brand}
                  onChange={handleChange}
                />
              </div>
              <div
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
                  Amount
                </Form.Label>
                <TextField
                  fullWidth
                  id="amount"
                  name="amount"
                  label="amount"
                  value={values.amount}
                  onChange={handleChange}
                />
              </div>
              <Form.Group
                style={{
                  paddingRight: "10px",
                  width: "140px",
                  textAlign: "left",
                  paddingLeft: "10px",
                  marginBottom: "10px",
                }}
              >
                <Form.Label className="">
                  Image
                  <Form.Control
                    className="inside"
                    name="image"
                    id="image"
                    type="file"
                    accept=".jpg, .jpeg, .png"
                    onChange={upload}
                  />
                </Form.Label>
              </Form.Group>
              <Button type="submit" variant="contained">
                Create
              </Button>
              <Button type="button" variant="contained" onClick={checkFruit}>
                Check
              </Button>
            </Form>
          )}
        </Formik>

        <Formik
          // validationSchema={schema}
          initialValues={{
            idd: "",
            amountt: "",
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
            errors,
          }) => (
            <Form noValidate onSubmit={handleSubmit} className="">
              <Grid>
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
                    Id
                  </Form.Label>
                  <TextField
                    fullWidth
                    id="idd"
                    name="idd"
                    label="id"
                    value={values.idd}
                    onChange={handleChange}
                  />
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
                    Amount
                  </Form.Label>
                  <TextField
                    fullWidth
                    id="amountt"
                    name="amountt"
                    label="amount"
                    value={values.amountt}
                    onChange={handleChange}
                  />
                </Row>
                <Button type="submit" variant="contained">
                  update
                </Button>
              </Grid>
            </Form>
          )}
        </Formik>
      </div>
      <div>
        <FruitList />
      </div>
    </Container>
  );
}

export default AdminProd;
