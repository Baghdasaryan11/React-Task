import React from 'react';
import ProductItem from '../ProductItem';
import { useDispatch, useSelector } from 'react-redux';
import { GET_PRODUCTS_ID } from '../../Redux/Types';


import './LatestProducts.css';

const LatestProducts = ({ products }) => {

    const dispatch = useDispatch();

    const category = useSelector(state => state.categories);




    let mens = products.filter(item => item.category === 'MEN').map((product) => {
        return (
            <ProductItem name={product.name} imgSrc={product.images} price={product.price} key={product.id} />
        )
    })
    let womens = products.filter(item => item.category === 'WOMEN').map((product) => {
        return (
            <ProductItem name={product.name} imgSrc={product.images} price={product.price} key={product.id} />
        )
    })

    let all = products.map((product) => {
        return (
            <ProductItem name={product.name} imgSrc={product.images} price={product.price} key={product.id} id={product.id} />
        )
    })


    return (
        <div className={'latestProducts'}>
            <p>LASTEST PRODUCTS</p>
            <div className={'hr'}></div>
            <div >
                {
                    category.mens ? mens
                        : category.womens ? womens : all
                }
            </div>

        </div>
    )
}

export default LatestProducts;