import React from 'react'
import { addToCart, removeToCart } from '../redux/action';
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'

const Details = (props) => {
    const location = useLocation();
    const dispatch = useDispatch();
    
    const item = location.state?.item
    // const { item } = props.match.params;
    // console.log("name::", props);
    return (
        <div className='product-container'>
            <div className='product-item'>
                <img src={item.photo} alt="" style={{ width: '200px', height: '200px' }} />
                <div>Name : {item.name} </div>
                <div>Color : {item.color} </div>
                <div>Price : {item.price} </div>
                <div>Category : {item.category} </div>
                <div>Brand : {item.brand} </div>
                <div>
                    <button onClick={() => dispatch(addToCart(item))} >Add to Cart</button>
                    <button onClick={() => dispatch(removeToCart(item.id))}>Remove to Cart</button>

                </div>
            </div>
        </div>
    )
}

export default Details
