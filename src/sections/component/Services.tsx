import "../../index.css"
import { useSpring, animated } from 'react-spring';
import { upAnimation } from '../partials/reactSpringAnimate';
import ServicesContainer from "../../common/services-container";
import { Grid } from '@mui/material';
import serviceList from "../assets/services-list";


function Services() {
    const animationProps = useSpring(upAnimation);
    return (
        <>
            <animated.div className="promo-container" style={animationProps}>
                <h1 className="promotion-heading">Quality services, powerful solutions</h1>
                <Grid container spacing={2}>
                    {serviceList.map((service, index) => (
                        <Grid item xs={12} md={6} lg={4}>
                            <ServicesContainer
                                key={index}
                                heading={service.heading}
                                body={service.body}
                                svg={service.svg}
                            />
                        </Grid>
                    ))}

                </Grid>
            </animated.div>
        </>
    )
}

export default Services;