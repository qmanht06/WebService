import React, { useState, useEffect } from 'react';
import './Slider.css';
import ArrowButton from './ArrowButton';
import DataSlider from './DataSlider';

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(1);
    // const [autoIndex, setAutoIndex] = useState(1);

    // useEffect(() => {
    //     setInterval(function () {
    //         nextSlide();
    //     }, 2000);

    //     return () => {
    //         setAutoIndex(1);
    //     }
    // }, [autoIndex]);

    const nextSlide = () => {
        if (slideIndex !== DataSlider.length) {
            setSlideIndex(slideIndex + 1)
        }
        else if (slideIndex === DataSlider.length) {
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1) {
            setSlideIndex(DataSlider.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index);
        // setAutoIndex(autoIndex + 1);
    }

    return (
        <div className="container-slider">
            {DataSlider.map((item, index) => {
                return (
                    <div
                        key={item.id}
                        className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    >
                        <img
                            src={item.url}
                        />
                    </div>
                )
            })}
            <ArrowButton moveSlide={nextSlide} direction={"next"} />
            <ArrowButton moveSlide={prevSlide} direction={"prev"} />

            <div className="container-dots">
                {Array.from([1, 2, 3, 4, 5]).map((item, index) => (
                    <div
                        key={item}
                        onClick={() => moveDot(index + 1)}
                        className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
        </div>
    )
}

export default Slider;