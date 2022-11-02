import React, {useState} from 'react';
import prod from '../product.json'
import Header from './Header';
import "./styles/Product.css"
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import { Slide } from 'react-slideshow-image';
import './styles/Slide.css';
import { width } from '@mui/system';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

function Product(){

    const styles ={
        img:{
            width: 280,
            height:280
        },
        size:{
           border: '2px solid black',
           margin: '2px',
           padding:'2px',
           height: '15',
        },
        text:{
            margin: '2px',
           padding:'2px',
           height: '15',

        },
        color:{
           border: '2px solid black',
 margin: '2px',
           padding:'2px'
        }
    }

    const [change, setChange]= useState(false);




    return (
        <div className='container'>

            <div className='h'>
                <Header/>
            </div>
            <div className='prd-container'>
             {prod.map(product => {
                return(
                <div className='prd' key={product.id}>
                   <div>
                    
                        <h3 className='na'>{product.name}</h3>
                
                    
                        <img src={product.main_picture_url} style={styles.img} />
                        {/* <ReactCompareSlider
                            itemOne={<ReactCompareSliderImage src={product.main_picture_url} alt="Image one" />}
                            itemTwo={<ReactCompareSliderImage src="https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-xanh-la-thumb-200x200.jpg" alt="Image two" />}
                        /> */}

           
                  </div>
                    <div className='prd-size-color'>
                    <div className='prd-size'>
                        <h3 className="size" style={styles.text}>size:</h3>
                        <h3 className="size" style={styles.size}>{product.size_range[0]} </h3>
                        <h3 className="size" style={styles.size}>{product.size_range[1]}</h3>
                        <h3 className="size" style={styles.size}>{product.size_range[2]}</h3>
                        <h3 className="size" style={styles.size}>{product.size_range[3]}</h3>
                        <h3 className="size" style={styles.size}>{product.size_range[4]}</h3>
                    </div>
                    <div className='prd-color'>
                        <h3 className="size" style={styles.text}>màu:</h3>

                        <h3 style={styles.color}>{product.color}</h3>
                    </div>
                   

                    <div className='prd-price'>
                        <h3> Giá: {product.retail_price_cents*660} VND</h3>
                    </div> 
                    <div>
                        <div> <h3>gioi thieu</h3></div>
                    <div className='prd-desc'>
                        {product.story_html}
                    </div>
                    </div>
                     </div>
                     
                </div>
                )
            })}
            </div>
        </div>

        );
}

export default Product;