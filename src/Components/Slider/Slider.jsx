import { generatedPublicUrl } from '../../utilities/urlConfig';
import './Style.css'
import React, { useState, useEffect } from 'react';
// import './CustomSlider.css'; // Import custom CSS for styling

const CustomImageSlider = ({ images, interval = 3000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const length = images?.length;

    // Move to the next slide
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === length - 1 ? 0 : prevIndex + 1));
    };

    // Move to the previous slide
    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? length - 1 : prevIndex - 1));
    };

    // Move to a specific slide when a thumbnail is clicked
    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    // Automatic slide transition
    useEffect(() => {
        const autoSlide = setInterval(nextSlide, interval);
        return () => clearInterval(autoSlide); // Cleanup the interval when component unmounts
    }, [currentIndex, interval]);

    // Styling to move to the next slide
    const translateValue = -currentIndex * 100;

    return (
        <div className="slider-container">
            <div className="slider">
                <div
                    className="slider-wrapper"
                    style={{
                        transform: `translateX(${translateValue}%)`, // Moves the slides
                        transition: 'transform 0.5s ease-in-out', // Smooth transition between slides
                        display: 'flex',
                    }}
                >
                    {images?.map((image, index) => (
                        <div key={index} className="slide">
                            <img src={generatedPublicUrl(image?.img)} alt={`Slide ${index}`} className="slider-image" />
                        </div>
                    ))}
                </div>

                {/* Optional: Add next/prev buttons */}
                <button className="prev" onClick={prevSlide}>
                    &#10094;
                </button>
                <button className="next" onClick={nextSlide}>
                    &#10095;
                </button>
            </div>

            {/* Thumbnail navigation */}
            <div className="thumbnail-container">
                {images?.map((image, index) => (
                    <div
                        key={index}
                        className={`thumbnail ${index === currentIndex ? 'active' : ''}`} // Add 'active' class for current image
                        onClick={() => goToSlide(index)} // Change the slide on thumbnail click
                    >
                        <img src={generatedPublicUrl(image?.img)} alt={`Thumbnail ${index}`} className="thumbnail-image" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CustomImageSlider;
