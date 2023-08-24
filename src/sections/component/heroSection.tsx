import { Box, Button, Container, Stack, Typography } from '@mui/material';
import wavyDesign from '../assets/wavyDesign.webp';

const HeroSection = () => {
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
        <Typography
          variant='subtitle1'
          style={{ marginTop: '32px', color: '#6A6A6A', fontWeight: '400' }}
        >
          At Informalcode, we provide innovative tech to scale your business to
          new heights.
        </Typography>
        <Button
          style={{ marginTop: '40px' }}
          variant='contained'
          color='secondary'
          size='medium'
        >
          Get in Touch
        </Button>
      </Box>
      <Box>
        {' '}
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
          }}
        >
          <>hello</>
        </Stack>
      </Box>
    </div>
  );
};

export default HeroSection;
