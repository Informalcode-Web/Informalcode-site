import { animated, useSpring } from 'react-spring';
import { logoAnimation } from './reactSpringAnimate';

const LogoAnimation = () => {
  const logoAnimations = useSpring(logoAnimation);

  return (
    <animated.div
      style={{
        display: 'flex',
        flexDirection: 'row',
        ...logoAnimations,
      }}
    >
      <img
        src='logo1.png'
        alt='Logo 1'
        style={{ width: '100px', height: 'auto' }}
      />
      <img
        src='logo2.png'
        alt='Logo 2'
        style={{ width: '100px', height: 'auto' }}
      />
    </animated.div>
  );
};

export default LogoAnimation;
