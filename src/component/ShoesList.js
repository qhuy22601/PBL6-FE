import React from 'react';

import sneakers from "../shoes.json"

function ShoesList(){

    return (

        <div>
            {sneakers.map(shoes=>{
                return(
                    <MainPage>
                       name= {shoes.brand_name}
                        img= {shoes.main_picture_url}
                    </MainPage>
                )
            })}
        </div>
        );

}

export default ShoesList;