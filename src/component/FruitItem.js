import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Fruit from "./Fruit";
import { getAllFruits } from "../feature/Fruit/FruitSlice";


function FruitItem(){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const storeAllFruits = useSelector(
      (state) => state.fruitReducer.getAllFruits
    );

    
    useEffect(() => {
        if(localStorage.getItem("Token")===null){
            navigate("/unauth");
        }
        dispatch(getAllFruits());
        console.log(getAllFruits());
    },[]);

    return(
        <div>
            {storeAllFruits?(
                storeAllFruits.map((fruits)=>{
                    return (
                      <Fruit
                        key={fruits.id}
                        id={fruits.id}
                        name={fruits.fruit_name}
                        description={fruits.description}
                        brand={fruits.brand}
                        amount={fruits.amount}
                        price={fruits.price}
                        image_url={fruits.image_url}
                      />
                    );
                })
            ):(
                <span></span>
            )}
        </div>
    );

}

export default FruitItem;
