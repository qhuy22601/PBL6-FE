// import { useDispatch, useSelector } from "react-redux";
// import {getAllFruits} from "./Feature/Fruit/FruitSlice"
import axios from "axios";
import "./styles/Fruit.css"
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Form from "react-bootstrap/Form";
import {React, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { RiCheckFill, RiUserFollowFill } from "react-icons/ri";
// import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

// function Fruit() {
//   const [error, setError] = useState(null);
//   const [resData, setResData] = useState([]);
//   const [quanty, setQuanty] = useState(null);
//   const [index, setIndex] = useState(null);

//   async function getAllFruit() {
//     const response = await axios({
//       method: "get",
//       url: "http://localhost:8000/api/auth/admin/getAllFruit",
//       headers: {
//         Authorization: "Bearer " + localStorage.getItem("Token"),
//       },
//     });
//     if (response.data != null && response.data.status === "Thất bại !!!") {
//       console.log(response.data.status);
//     }
//     if (response.data != null && response.data.status === "Thành công !!!") {
//       setResData(response.data.data);
//     }
//   }

//   useEffect(() => {
//     getAllFruit();
//   }, [resData]);


//   function change(e){
//     setQuanty(e.target.quanty);
//   }

//   return (
//     <div className="card-grid">
//       {resData.map((item, index) => {
//         return (
//           <Card
//             sx={{ width: 220, marginRight: 2, marginBottom: 2 }}
//             key={item.id}
//           >
//             <CardMedia
//               component="img"
//               height="140"
//               image={`http://localhost/pbl6/${item.image_url}`}
//               alt="green iguana"
//             />
//             <CardContent>
//               <Typography gutterBottom variant="h5" component="div">
//                 {item.fruit_name}
//               </Typography>
//               <Typography variant="body2" color="text.secondary">
//                 {item.price}
//               </Typography>
//             </CardContent>
            
//             <CardActions>
//               <Button size="small">Buy</Button>
//               <Button size="small">Add to cart</Button>
//             </CardActions>
//           </Card>

//           //   </div>
//         );
//       })}
//     </div>
//   );
// }

// export default Fruit;


function Fruit(props){ 
  return (
    <Card sx={{ width: 220, marginRight: 2, marginBottom: 2 }} key={props.id}>
      <CardMedia
        component="img"
        height="140"
        image={`http://localhost/pbl6/${props.image_url}`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.fruit_name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.price}
        </Typography>
      </CardContent>
     
      <CardActions>
        <Button size="small">Buy</Button>
        <Button size="small">Add to cart</Button>
      </CardActions>
    </Card>

    //   </div>
  );
}

export default Fruit;