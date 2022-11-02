import React, { useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Button, Col, Container, Nav, Navbar, Row } from "react-bootstrap";


import "./styles/DashBoard.css"


function DashBoard(){

    return (
    <div className="container">
        <div className="left">
            <div className="left-logo">
                <h2 className="text-logo">LOGO</h2>
            </div>
            
            <div className="opt">
                <ul className="opt-list">
                    <Link to=""><li className="opt-item">DashBoard</li></Link>
                    <Link to="product"><li className="opt-item">Sản Phẩm</li></Link>
                    <Link to="customer"><li className="opt-item">Khách Hàng</li></Link>
                    <Link to="order"><li className="opt-item">Đơn Hàng</li></Link>
                    <Link to="statistic"><li className="opt-item">Thống Kê</li></Link>
                    <Link to="report"><li className="opt-item">Báo Cáo</li></Link>
                    <Link to="setting"><li className="opt-item">Cài Đặt</li></Link>
                </ul>
            </div>
        </div>
             
        <div className="right">
            <div className="right-header">
                <div className="admin-name">admin1</div>
            </div>
            <Outlet/>
        </div>
    </div>
    );

}

export default DashBoard;


