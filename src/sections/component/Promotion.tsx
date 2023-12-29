import "../../index.css"
import { Button } from '@mui/material';
import promotionImg from "../assets/promotionImg.png"
import { useSpring, animated } from 'react-spring';
import { upAnimation } from '../partials/reactSpringAnimate';

function Promotion() {
    const animationProps = useSpring(upAnimation);

    return (

        <>
            <animated.div className="promo-container" style={animationProps}>
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
            </animated.div>
        </>
    )
}

export default Promotion;