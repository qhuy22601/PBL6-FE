import React from 'react';
import buy from '../cart.json'
function Purchase(){
    
    return (
        <div>
            {buy.map(shoes=>{
                return(
                    <div key={shoes.id}>
                        img = {shoes.main_picture_url}
                        price ={shoes.retail_price_cents}*990
                        amount = {shoes.amount}
                        
                    </div>
                )
            })}
        </div>
    );

}
export default Purchase;