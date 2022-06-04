import React from 'react';
import DataSlider from "./DataSource/DataSlider";
import "./SaleAdvertisement.css";

const SaleAdvertisement = () => {
    return (
        <div className="advertisement-container ">
            {DataSlider.map((item, index) => {
                if (index < 2) {
                    return (
                        <div className="info-container" key={index}>
                            <img
                                className="image-wrapper"
                                src={item.url}
                                alt=""
                            />
                            <div className="sale-container">
                                <div className="sale-title">Khuyến mãi đặc biệt</div>
                                <div className="sale-title sale-info">Upto 50% Off</div>
                                <button type="button" className="add-to-cart-btn">Mua Ngay</button>
                            </div>
                        </div>
                    )
                } else return null;
            })}

            {/* <div
                className="image-wrapper col-xs-1 col-sm-2 col-md-4 col-lg-6 col-xl-2   "
                style={{ backgroundImage: `url(${BANNER_02})` }}
            /> 
            <div>test</div> */}

        </div>
    )
}

export default SaleAdvertisement;