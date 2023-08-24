import { Box, Button, Container, Stack, Typography } from '@mui/material';
import wavyDesign from '../assets/wavyDesign.webp';
import { animated, useTrail } from 'react-spring';
import { upAnimation } from '../partials/reactSpringAnimate';
import LogoAnimation from '../partials/logoAnimateContainer';

const HeroSection = () => {
  const textSprings = useTrail(3, upAnimation);

  return (
    <div
      style={{
        display: 'flex',
        padding: '0px',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '40px',
        alignSelf: 'stretch',
        textAlign: 'center',
      }}
    >
      <Box
        style={{
          padding: '160px 120px 140px 120px',
          gap: '40px',
          alignSelf: 'stretch',
          alignItems: 'center',
          background: `linear-gradient(180deg, #FFF 0%, rgba(255, 255, 255, 0.80) 100%),url(${wavyDesign})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPositionY: '10px',
        }}
      >
        {textSprings.map((props, index) => (
          <animated.div key={index} style={props}>
            {index === 0 ? (
              <Typography
                variant='h1'
                style={{
                  fontFamily: 'epilogue',
                  fontSize: '60px',
                  fontWeight: '700',
                  lineHeight: '120%',
                  letterSpacing: '-2.4px',
                  background:
                    'linear-gradient(180deg, rgba(0, 0, 0, 0.70) 0%, #000 43.74%, rgba(0, 0, 0, 0.70) 100%)',
                  backgroundClip: 'text',
                  color: 'transparent',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Developing top-notch technology to <br /> support your business
                expansion
              </Typography>
            ) : index === 1 ? (
              <Typography
                variant='subtitle1'
                style={{
                  marginTop: '32px',
                  color: '#6A6A6A',
                  fontWeight: '400',
                }}
              >
                At Informalcode, we provide innovative tech to scale your
                business to new heights.
              </Typography>
            ) : (
              <Button
                style={{
                  marginTop: '40px',
                  borderRadius: '8px',
                  textTransform: 'none',
                  fontWeight: '400',
                }}
                variant='contained'
                color='secondary'
                size='medium'
              >
                Get in Touch
              </Button>
            )}
          </animated.div>
        ))}
      </Box>
      <Box>
        <Typography
          variant='h1'
          style={{
            fontFamily: 'epilogue',
            fontSize: '18px',
            fontWeight: '400',
          }}
        >
          Powering your business with the latest technologies
        </Typography>
        <Stack
          style={{
            width: '696px',
            backgroundColor: 'red',
            height: '56px',
            marginTop: '32px',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <div
            style={{
              backgroundImage:
                'linear-gradient(90deg, #FFF 4.90%, rgba(255, 255, 255, 0.00) 19.06%, rgba(255, 255, 255, 0.00) 46.89%, rgba(255, 255, 255, 0.00) 85.42%, #FFF 100%)',
              position: 'absolute', // Set the position to absolute
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
            }}
          />
          <LogoAnimation />
        </Stack>
      </Box>
    </div>
  );
};

export default HeroSection;
