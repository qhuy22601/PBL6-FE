// import { useDispatch, useSelector } from "react-redux";
// import {getAllFruits} from "./Feature/Fruit/FruitSlice"
import axios from "axios";
import "./styles/Fruit.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Form from "react-bootstrap/Form";
import { React, useEffect, useState, useContext } from "react";
import FruitDetail from "./FruitDetail";
import {
  useNavigate,
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import { createContext } from "react";
import { auto } from "@popperjs/core";
import { Center } from "@chakra-ui/layout";
// import { useDispatch, useSelector } from "react-redux";

function Fruit({data}) {
  const [resData, setResData] = useState([]);
  const [display, setDisplay] = useState(false);

  const navigate = useNavigate();

  async function getAllFruit() {
    const response = await axios({
      method: "get",
      url: "http://116.105.26.48:8080/api/auth/getAllFruit",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("Token"),
      },
    });
    if (response.data != null && response.data.status === "Thất bại !!!") {
      console.log(response.data.status);
    }
    if (response.data != null && response.data.status === "Thành công !!!") {
      setResData(response.data.data);
    }
  }

  useEffect(() => {
    getAllFruit();
  },[]);


  return (
    <div className="card-grid">
      {resData.map((item) => {
        return (
          <Card
            sx={{ width: 220, marginRight: 2, marginBottom: 2 }}
            key={item.id}
          >
            <Link to={`/fruit-detail/${item.id}`}>
              <CardMedia
                component="img"
                height="140"
                image={`http://116.105.26.48:8080${item.image_url}`}
                alt=""
              />
            </Link>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.fruit_name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.price}
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: "center"}}>
              <Link to={`/fruit-detail/${item.id}`}>
              <Button size="small">Buy</Button>
              </Link>
            </CardActions>
          </Card>
        );
      })}
    </div>
  );
}

export default Fruit;

// function Fruit(props){
//   return (
//     <Card sx={{ width: 220, marginRight: 2, marginBottom: 2 }} key={props.id}>
//       <CardMedia
//         component="img"
//         height="140"
//         image={`http://localhost/pbl6/${props.image_url}`}
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           {props.fruit_name}
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           {props.price}
//         </Typography>
//       </CardContent>

//       <CardActions>
//         <Button size="small">Buy</Button>
//         <Button size="small">Add to cart</Button>
//       </CardActions>
//     </Card>

//     //   </div>
//   );
// }

// export default Fruit;
