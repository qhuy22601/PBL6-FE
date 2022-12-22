import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Menu } from 'antd';
import './styles/DashBoard.scss';

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem('DashBoard', ''),
  getItem('Sản phẩm', 'product'),
  getItem('Khách Hàng', 'customer'),
  getItem('Đơn Hàng', 'order'),
  getItem('Thống Kê', 'statistic'),
  getItem('Báo Cáo', 'report'),
  getItem('Cài Đặt', 'setting'),
];

function DashBoard() {
  let navigate = useNavigate();
  const onClick = (e) => {
    navigate(e.key);
  };
  return (
    <div className="site-dashboard">
      <div className="container">
        <div className="nav">
          <div className="logo">
            <h2 className="text-logo">LOGO</h2>
          </div>

          <div className="nav-body">
            <Menu
              onClick={onClick}
              defaultSelectedKeys={['sub2']}
              defaultOpenKeys={['sub1']}
              mode="inline"
              items={items}
            />
          </div>
        </div>

        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
