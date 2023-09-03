import React, { useState } from 'react';
import './Carousel.css'; // Import your custom CSS

const Carousel = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="carousel">
            <button onClick={prevImage} className="carousel-button prev">
                &lt;
            </button>
            <img
                src={images[currentImageIndex]}
                alt={`Image ${currentImageIndex + 1}`}
                className="carousel-image"
            />
            <button onClick={nextImage} className="carousel-button next">
                &gt;
            </button>
        </div>
    );
};

export default Carousel;