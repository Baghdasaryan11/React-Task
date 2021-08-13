import React, { useState, useEffect } from 'react';
import './BestSealers.css';

import { useSelector } from 'react-redux';


const BestSealers = ({ products }) => {
    const category = useSelector(state => state.categories);
    let mens = products.filter(item => item.category === 'MEN').slice(0, 3).map((item) => {
        return (
            <div className={'bestSealersItem'} key={item.id}>
                <div style={{ backgroundImage: `url(${item.images[0]})` }}></div>
                <div>
                    <p>{item.short_description}</p>

                    {
                        item.status === "SALE" ? <span className={'sale'}>$ {item.price + 100}. <small>00</small></span> : <div style={{ display: 'none' }}></div>
                    }
                    <br />
                    <span className={'price'}>${item.price}.<small>00</small></span>
                </div>
            </div>
        )
    })
    let womens = products.filter(item => item.category === 'WOMEN').slice(0, 3).map((item) => {
        return (
            <div className={'bestSealersItem'} key={item.id}>
                <div style={{ backgroundImage: `url(${item.images[0]})` }}></div>
                <div>
                    <p>{item.short_description}</p>

                    {
                        item.status === "SALE" ? <span className={'sale'}>$ {item.price + 100}. <small>00</small></span> : <div style={{ display: 'none' }}></div>
                    }
                    <br />
                    <span className={'price'}>${item.price}.<small>00</small></span>
                </div>
            </div>
        )
    })

    let all = products.slice(0, 3).map((item) => {
        return (
            <div className={'bestSealersItem'} key={item.id}>
                <div style={{ backgroundImage: `url(${item.images[0]})` }}></div>
                <div>
                    <p>{item.short_description}</p>

                    {
                        item.status === "SALE" ? <span className={'sale'}>$ {item.price + 100}. <small>00</small></span> : <div style={{ display: 'none' }}></div>
                    }
                    <br />
                    <span className={'price'}>${item.price}.<small>00</small></span>
                </div>
            </div>
        )
    })
    const view = () => {
        if (category.mens) {
            return mens
        }
        else if (category.womens) {
            return womens
        }

        else if (category.mens && category.womens) {
            return all
        }
        else {
            return all
        }
    }


    return (
        <div className={'bestSealers'} >

            <div className={'bestSealers-title'}>
                <p>BEST SEALERS</p>
            </div>
            <hr />
            {

                view()

            }
        </div>
    )
};
export default BestSealers;