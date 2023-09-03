import React, { useState } from 'react';
import './Carousel2.css'; // Import your custom CSS

const Carousel2 = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 3 : prevIndex - 1
        );
    };

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === images.length - 3 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="carousel2">
            <button onClick={prevImage} className="carousel2-button prev">
                &lt;
            </button>
            <div className="carousel2-images">
                {images.slice(currentImageIndex, currentImageIndex + 3).map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Image ${currentImageIndex + index + 1}`}
                        className="carousel2-image"
                    />
                ))}
            </div>
            <button onClick={nextImage} className="carousel2-button next">
                &gt;
            </button>
        </div>
    );
};

export default Carousel2;