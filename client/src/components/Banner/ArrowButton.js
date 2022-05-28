import React from "react";
import "./Slider.css";
import { PREV_ARROW, NEXT_ARROW } from './DataSource/BannerArrow';

const ArrowButton = ({ direction, moveSlide }) => {
    // console.log(direction, moveSlide);
    return (
        <button
            onClick={moveSlide}
            className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
        >
            <img src={direction === "next" ? NEXT_ARROW : PREV_ARROW} alt="" />
        </button>
    );
}

export default ArrowButton;