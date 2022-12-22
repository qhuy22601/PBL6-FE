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

import "./styles/Header.css";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import sneakers from '../fruit.json'
import Header from './Header';
import HeaderAfter from './HeaderAfter'

function MainPage(props){

  const[checkSignin,setCheckSignin] =useState(localStorage.getItem("User"))




    return(
      <div className="container">
        <div className="main">
        {(checkSignin!==null)?(<HeaderAfter></HeaderAfter>):(<Header></Header>)}
        </div>
    
        <div className="ima">
            <img className='imgg' src="https://img.freepik.com/premium-vector/fresh-fruit-logo-design-mascot_157713-4.jpg?w=2000"></img>
        </div>


    <div className='product'>
       <div className="gallery">
            {sneakers.map(shoes=>{
                return(
                    <div className="content" key={shoes.id}>
                        
                       <h3>{shoes.name}</h3>
                        <img className="shoes" src= {shoes.image}></img>
                        <h4>{shoes.price} VND</h4>
                    </div>
                )
            })}
        </div>
            </div>
        </div>
        


        
        
    );
}


export default MainPage;