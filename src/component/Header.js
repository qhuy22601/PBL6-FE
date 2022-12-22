import AppsIcon from "@mui/icons-material/Apps";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import ForumIcon from "@mui/icons-material/Forum";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import SupervisedUserCircleOutlinedIcon from "@mui/icons-material/SupervisedUserCircleOutlined";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import { IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import { Col, Container } from "react-bootstrap";
import { Link, Outlet, useNavigate } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import SearchInput from "../component/SearchInput";
import "./styles/Header.css";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';

import { IconContext } from 'react-icons';





function Header(props){


    const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  let navigate = useNavigate();

  const[checkSignin,setCheckSignin] =useState(localStorage.getItem("User"))


  const check = () =>{
    if (checkSignin !== null){
      localStorage.removeItem("User");
      localStorage.removeItem("Email")
      localStorage.removeItem("Token")
      navigate("/home")
    }

  }





  const styles ={
    test:{
      color:'black',
    }
  }


    return (
      <div className="containerrr">
        <div className="main">
          <Container
            className="con"
            style={{ paddingRight: "0px", paddingTop: "0px" }}
          >
            <div className="header">
              <SearchIcon color="primary" fontSize="large" />
              <SearchInput />

              <div className="header_center">
                {/* <div className="header_option header_option--active"> */}
                {/* <Link to="/mainpage" className="home" onClick={check}> */}{" "}
                <HomeOutlinedIcon fontSize="large" onClick={check} />
                {/* </Link> */}
                {/* </div> */}
              </div>

              <div className="header_right">
                <div className="header_info">
                  <Link to="/signin" className="header_info_text">
                    Đăng nhập/Đăng kí
                  </Link>
                </div>

                <div className="iconButton">
                  <Link to="/cart" className="iconButton">
                    <ShoppingCartIcon fontSize="large" />
                  </Link>
                </div>
                <IconContext.Provider value={{ color: "#fff" }}>
                  <div className="navbar">
                    <Link to="#" className="menu-bars">
                      <FaIcons.FaBars onClick={showSidebar} />
                    </Link>
                  </div>
                  <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                    <ul className="nav-menu-items" onClick={showSidebar}>
                      <li className="navbar-toggle">
                        <Link to="#" className="menu-bars">
                          <AiIcons.AiOutlineClose />
                        </Link>
                      </li>
                      {SidebarData.map((item, index) => {
                        return (
                          <li key={index} className={item.cName}>
                            <Link to={item.path}>
                              {item.icon}
                              <span>{item.title}</span>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </nav>
                </IconContext.Provider>

                {/* <div className="iconButton" onClick={handleSignOut}>
                <IconButton>
                  <ExpandMoreIcon />
                </IconButton>
              </div> */}
              </div>
            </div>
          </Container>
        </div>
      </div>
    );
}

export default Header;