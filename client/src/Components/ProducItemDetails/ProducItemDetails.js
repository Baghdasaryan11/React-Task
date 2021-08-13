import React, { useEffect, useState } from 'react';
import styles from './ProducItemDetails.module.css';
import axios from 'axios';

import Carousel from './Carousel';


const ProducItemDetails = (props) => {
    const prodId = props.match.params.id
    console.log(prodId)
    const [product, setProduct] = useState({})
    const [img, setImg] = useState([])
    const [count, setCount] = useState(0)
    const [carousel, setCarousel] = useState([
        { id: 0, url: '' }
    ])

    useEffect(() => {
        getProductItem()

    }, [])

    const getProductItem = async () => {
        const res = await axios(`/products/${prodId}`, {
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await res.data
        setProduct(data)
        setImg(data.images)
        const a = data.images.map((item, idx) => {

            return {
                id: idx,
                url: item
            }
        })
        setCarousel(a)

    }


    const incProduct = () => {
        if (count >= product.quantity) {
            alert(`We have onli ${product.quantity}`)
        } else {
            setCount(count + 1)
        }
    }
    const decProduct = () => {
        if (count <= 0) {
            return
        } else {
            setCount(count - 1)
        }

    }





    return (
        <div className={styles.root}>
            <div className={styles.slider}>
                {/* <img src={product.images} alt="" />
                <div>
                    <button><i className="fas fa-arrow-left"></i></button>
                    {
                        img.map((item, index) => {

                            return <img src={item} alt="" key={index} />
                        })
                    }
                    <button><i className="fas fa-arrow-right"></i></button>
                </div> */}
                <Carousel images={carousel} />
            </div>
            <div className={styles.details}>
                <h2>{product.short_description}</h2>
                <div className={styles.stars}>

                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>

                    <p>(0 reviews) &nbsp; | &nbsp; Add Your Review</p>
                </div>
                <div className={styles.hr}></div>
                <div className={styles.priceBlock}>
                    <span>${product.price + 100}</span>
                    <span> ${product.price}</span>
                </div>
                <div className={styles.hr}></div>
                <div className={styles.addToCartBlock}>
                    <div>
                        <i className="fas fa-shopping-basket"></i>
                        <span>&nbsp; ADD TO CART</span>
                    </div>
                    <div className={styles.cartOtherIcons}><i className="far fa-heart"></i></div>
                    <div className={styles.cartOtherIcons}><i className="fas fa-exchange-alt"></i></div>
                    <div className={styles.cartOtherIcons}><i className="far fa-envelope"></i></div>
                </div>
                <div className={styles.quantity}>
                    <span>Quantity:</span>
                    <div>
                        <input type="text" value={count} onChange={(e) => setCount(e.target.value)} className={styles.addCount} />
                        <input type="button" value='+' onClick={() => incProduct()} />
                        <input type="button" value='-' onClick={() => decProduct()} />
                    </div>
                </div>
                <div className={styles.hr}></div>
                <div className={styles.quickOverview}>
                    <h2>Quick Overview</h2>
                    <p>{product.long_description}</p>
                </div>
                <div className={styles.hr}></div>

                <div className={styles.category}>
                    <p>Availability: <span>{product.quantity}</span></p>
                    <p>Category: <span>{product.category}</span></p>
                </div>
                <div className={styles.hr}></div>

                <div className={styles.social}>

                </div>
            </div>
        </div>
    )
};
export default ProducItemDetails;