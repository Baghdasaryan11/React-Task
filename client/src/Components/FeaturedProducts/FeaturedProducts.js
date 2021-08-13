import React, { useEffect, useState } from 'react';
import ProductItem from '../ProductItem';
import './FeaturedProducts.css';

const FeaturedProducts = ({ products }) => {


    return (
        <div className={'featuredProducts'}>
            <p>FEATURED PRODUCTS</p>
            <div className={'hr'}></div>
            <div>
                {
                    products.slice(0, 3).map(product => {
                        return (
                            <ProductItem name={product.name} imgSrc={product.images} price={product.price} key={product.id} id={product.id} />
                        )
                    })
                }
            </div>

        </div>
    )
};

export default FeaturedProducts;