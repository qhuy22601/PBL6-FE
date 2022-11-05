import React from 'react';
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
import "./styles/UserPage.css";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Header from './Header'
import HeaderAfter from "./HeaderAfter"

function UserPage(props){


     const [isHovering, setIsHovering] = useState(false);
    const [isHovering1, setIsHovering1] = useState(false);
    const [isHovering2, setIsHovering2] = useState(false);
    const [isHovering3, setIsHovering3] = useState(false);
    const[checkSignin,setCheckSignin] =useState(localStorage.getItem("User"))

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };




  const handleMouseOver1 = () => {
    setIsHovering1(true);
  };

  const handleMouseOut1 = () => {
    setIsHovering1(false);
  };


  const handleMouseOver2 = () => {
    setIsHovering2(true);
  };

  const handleMouseOut2 = () => {
    setIsHovering2(false);
  };


  const handleMouseOver3 = () => {
    setIsHovering3(true);
  };

  const handleMouseOut3 = () => {
    setIsHovering3(false);
  };


    return(
      <div className="container">
        <div className="main">
        {(checkSignin!==null)?(<HeaderAfter></HeaderAfter>):(<Header></Header>)}
        </div>
        <div className="pro5">
          <form className="form">
            <div className='inp'>
                SDT: 
                <input type="text" name="SDT" placeholder="SDT"></input>
            </div>
            <div className='inp'>
              MK:  
              <input type="password" name="password" placeholder="password"></input>
             
            </div>
             <button type="submit" >thay doi</button>
          </form>
        </div>
        <div className="info">
          <div className='order'>
            <h2 className='text'>Don mua</h2>
            <h3 className='text'>10</h3>
            <h6 className='text'>xem</h6>
          </div>

          <div className='order'>
            <h2 className='text'>Dang giao</h2>
            <h3 className='text'>1</h3>
            <h6 className='text'>xem</h6>
          </div>

          <div className='order'>
            <h2 className='text'>ngan hang</h2>
            <h3 className='text'>2</h3>
            <h6 className='text'>xem</h6>
          </div>
        </div>
       
        </div>
    );
}


export default UserPage;