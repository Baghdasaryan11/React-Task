import React, { useEffect, useRef, useState } from "react";


const Carousel = ({ images }) => {
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState({});
    const carouselItemsRef = useRef([]);
    console.log('1', selectedImageIndex)
    console.log('2', selectedImage)

    console.log(images)

    useEffect(() => {
        if (images && images[0]) {
            carouselItemsRef.current = carouselItemsRef.current.slice(
                0,
                images.length
            );

            setSelectedImageIndex(0);
            setSelectedImage(images[0]);
        }
    }, [images]);

    const handleSelectedImageChange = (newIdx) => {
        if (images && images.length > 0) {
            setSelectedImage(images[newIdx]);
            setSelectedImageIndex(newIdx);
            if (carouselItemsRef.current[newIdx]) {
                carouselItemsRef.current[newIdx].scrollIntoView({
                    inline: "center",
                    behavior: "smooth"
                });
            }
        }
    };

    const handleRightClick = () => {
        if (images && images.length > 0) {
            let newIdx = selectedImageIndex + 1;
            if (newIdx >= images.length) {
                newIdx = 0;
            }
            handleSelectedImageChange(newIdx);
        }
    };

    const handleLeftClick = () => {
        if (images && images.length > 0) {
            let newIdx = selectedImageIndex - 1;
            if (newIdx < 0) {
                newIdx = images.length - 1;
            }
            handleSelectedImageChange(newIdx);
        }
    };


    return (
        <div className="carousel-container">
            <div
                className="selected-image"
                style={{ backgroundImage: `url(${selectedImage.url})` }}
            />
            <div className="carousel">
                <div className="carousel__images">
                    {images &&
                        images.map((image, idx) => (
                            <img
                                onClick={() => handleSelectedImageChange(idx)}
                                src={image.url}
                                key={image.id}
                                className={`carousel__image ${selectedImageIndex === idx && "carousel__image-selected"
                                    }`}
                                ref={(el) => (carouselItemsRef.current[idx] = el)}
                            />
                        ))}
                </div>
                <button
                    className="carousel__button carousel__button-left"
                    onClick={handleLeftClick}
                >
                    <i className="fas fa-arrow-left"></i>
                </button>
                <button
                    className="carousel__button carousel__button-right"
                    onClick={handleRightClick}
                >
                    <i className="fas fa-arrow-right"></i>
                </button>
            </div>
        </div>
    );
};

export default Carousel;
