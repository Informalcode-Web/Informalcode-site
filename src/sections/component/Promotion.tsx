import React from "react";
import "../../index.css"
import { Typography, Button } from '@mui/material';
import theme from "../../common/theme";
import promotionImg from "../assets/promotionImg.png"

function Promotion() {
    return (
        <>
            <div className="promo-container">

                <h1 className="promotion-heading">Best crafted, just for you</h1>
                <p className="promotion-paragrapgh">
                    At Informalcode, we craft your idea and make it come to life , whether it is a product or web design
                </p>
                <div className="promo-btn">
                    <Button variant='contained' color='secondary'>Get in Touch</Button>
                </div>
                <div>
                    <img className="promo-Img" src={promotionImg} alt="" />
                </div>
            </div>
        </>
    )
}

export default Promotion;