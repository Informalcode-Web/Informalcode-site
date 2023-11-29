import "../../index.css"
import { Grid } from '@mui/material';
import teamImg1 from "../assets/about_us1.jpg"
import teamImg2 from "../assets/about_us2.jpg"
import { useSpring, animated } from 'react-spring';
import { upAnimation } from '../partials/reactSpringAnimate';


function Contact() {
    const animationProps = useSpring(upAnimation);

    return (
        <>
            <animated.div className="promo-container" style={animationProps}>
                <h1 className="promotion-heading">At Informalcode, we thrive to be the best</h1>
                <p className="about-paragraph">
                    Informal Code is a dynamic team of industry professionals dedicated to crafting
                    exceptional products. With a combined industrial experience, we bring a wealth
                    of knowledge and expertise to every project we undertake. Our goal is to create
                    visually stunning and highly functional websites that not only meet our clients
                    ' needs but exceed their expectations. We believe in the power of innovation,
                    creativity, and collaboration, and we strive to deliver unique solutions tailored
                    to each client's requirements. Join us on this exciting journey as we transform ideas
                    into engaging online experiences.

                </p>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} lg={6}>
                        <img className="contact-Img" src={teamImg1} alt="" />
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>
                        <img className="contact-Img" src={teamImg2} alt="" />
                    </Grid>
                </Grid>

            </animated.div>
        </>
    )
}

export default Contact;