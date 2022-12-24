import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import SignIn from "./SignIn";
import SignUp from "./SignUp";
import HomePage from "./HomePage";
import MainPage from "./MainPage";
import UserPage from "./UserPage";
import DashBoard from "./DashBoard";
import Product from "./Product";
import Cart from "./Cart";
import AdminCust from "./AdminCust";
import AdminOrder from "./AdminOrder";
import AdminStatistic from "./AdminStatistic";
import AdminSetting from "./AdminSetting";
import AdminReport from "./AdminReport";
import AdminProd from "./AdminProd";
import Forgot from "./Forgot";
import Reset from "./Reset";
import UnauthorizedPage from "./UnauthorizedPage";
import FruitDetail from "./FruitDetail";
import ListCart from "./ListCart";
function AppContainer() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" exact="true" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="reset" element={<Reset />}></Route>
        <Route path="/mainpage" element={<MainPage />} />
        <Route path="/unauth" element={<UnauthorizedPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/fruit-detail/:id" element={<FruitDetail />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/product" element={<Product />} />
        <Route path="/listcart" element={<ListCart/>}/>
        <Route path="/dashboard" element={<DashBoard />}>
          <Route path="customer" element={<AdminCust />} />
          <Route path="order" element={<AdminOrder />} />
          <Route path="product" element={<AdminProd />} />
          <Route path="report" element={<AdminReport />} />
          <Route path="setting" element={<AdminCust />} />
          <Route path="statistic" element={<AdminStatistic />} />
          <Route path="setting" element={<AdminSetting />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default AppContainer;
