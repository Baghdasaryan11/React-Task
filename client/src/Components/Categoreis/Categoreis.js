import React, { useState } from 'react';
import './Categoreis.css';
import { useSelector, useDispatch } from 'react-redux';
import { MENS_C, WOMEN_C } from '../../Redux/Types';

const Categoreis = () => {

    const dispatch = useDispatch();
    const categorie = useSelector(state => state.categories)

    let menBtn = [];
    let womenBtn = [];

    if (categorie.mens) {
        menBtn.push('activeC')
    } else { menBtn.push('defaultC') }
    if (categorie.womens) {
        womenBtn.push('activeC')
    } else { womenBtn.push('defaultC') }


    return (
        <div className='categorys'>
            <h2 className='category-title'>CATEGORIES</h2>
            <hr />
            <div className="buttons-block">
                <div>
                    <span className='category-name'>Mens's</span>
                    <div className='between'></div>
                    <button
                        className={menBtn}
                        onClick={() => dispatch({ type: MENS_C })}>
                        {categorie.mens ? '+' : '-'}
                    </button>
                </div>
                <div>
                    <span className='category-name'>Women's</span>
                    <div className='between'></div>
                    <button
                        className={womenBtn}
                        onClick={() => dispatch({ type: WOMEN_C })}>
                        {categorie.womens ? '+' : '-'}
                    </button>
                </div>

            </div>
        </div>
    );
};

{/* <div
    className={womenBtn}
    onClick={() => dispatch({ type: WOMEN_C })}>
    {categorie.womens ? '+' : '-'}
</div> */}

export default Categoreis;