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
import "./styles/MenuBar.css";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
function MenuBar(){

    return(

        <div className="main">
            <Container> 
                <div>

                </div>
            </Container>
        </div>
    );
}

export default MenuBar;