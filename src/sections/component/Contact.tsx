import "../../index.css"
import { Grid, Button, TextField } from '@mui/material';
import teamImg from "../assets/informalTeamForm.jpg"
import { useSpring, animated } from 'react-spring';
import { upAnimation } from '../partials/reactSpringAnimate';


function Contact() {
    const animationProps = useSpring(upAnimation);

    return (
        <>
            <animated.div className="contact-container" style={animationProps}>
                <h1 className="contact-heading">Why wait? Talk to us</h1>
                <p className="contact-paragraph">Need a website or a product to be built? Talk to us.</p>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} lg={6}>
                        <form className="contact-forms">
                            <label className="contact-labels">Full Name</label>
                            <TextField id="outlined-basic" className="cntInp" placeholder="Type your name here" variant="outlined" />

                            <label className="contact-labels">Contact number</label>
                            <TextField id="outlined-basic" className="cntInp" placeholder="0000000000" variant="outlined" />

                            <label className="contact-labels">Email</label>
                            <TextField id="outlined-basic" className="cntInp" placeholder="example@email.com" variant="outlined" />

                            <label className="contact-labels">Message</label>
                            <TextField id="outlined-multiline-static" placeholder="Type your message here" multiline rows={4} className="cntInp" />

                            <Button className="cntInp" sx={{ marginTop: '42px' }} variant='contained' color='secondary'>Submit</Button>

                        </form>
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>
                        <img className="contact-Img" src={teamImg} alt="" />
                    </Grid>
                </Grid>

            </animated.div>
        </>
    )
}

export default Contact;