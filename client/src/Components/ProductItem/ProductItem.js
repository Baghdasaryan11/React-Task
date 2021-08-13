import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { GET_PRODUCTS_ID } from '../../Redux/Types'
import './ProductItem.css';

const ProductItem = ({ name, imgSrc, price, id }) => {

    const dispatch = useDispatch();

    const history = useHistory();

    const idPush = () => {
        dispatch({ type: GET_PRODUCTS_ID, payload: id })
        history.push(`products/${id}`)
    }

    return (
        <div className={'productItem'} onClick={idPush}>
            <div style={{ backgroundImage: `url(${imgSrc[0]})` }}>

            </div>

            <p>{name}</p>
            <span>${price}. <small>99</small></span>
        </div>
    )
};


export default ProductItem;