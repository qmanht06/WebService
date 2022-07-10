import React, { useState, useEffect } from "react";
import "./Slider.scss";
import ArrowButton from "./ArrowButton";
import DataSlider from "../../data/DataSlider";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(1);
  const slideLength = DataSlider.length;
  let slideInterval;
  const intervalTime = 5000;
  const autoScroll = true;

  const nextSlide = () => {
    setSlideIndex(slideIndex === slideLength ? 1 : slideIndex + 1);
    console.log("next");
  };

  const prevSlide = () => {
    setSlideIndex(slideIndex === 1 ? slideLength : slideIndex - 1);
    console.log("prev");
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  const autoNavigation = () => {
    slideInterval = setInterval(nextSlide, intervalTime);
  };

  useEffect(() => {
    setSlideIndex(1);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      autoNavigation();
    }

    return () => {
      clearInterval(slideInterval);
    };
  }, [slideIndex]);

  return (
    <div className="container-slider">
      {DataSlider.map((item, index) => {
        return (
          <div
            key={item.id}
            className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
            style={{ backgroundImage: `url(${item.url})` }}
          >
            {/* <img
                            src={item.url}
                            alt=""
                        /> */}
          </div>
        );
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
  );
};

export default Slider;
