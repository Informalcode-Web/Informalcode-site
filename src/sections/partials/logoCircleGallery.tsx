import React from 'react';
import { logos, logoToBackgroundColor } from '../util/importLogos';

function shuffleArray(array: string[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function LogoCircleGallery() {
  const circleSize = 56;
  const maxImageSize = circleSize - 20;

  const imageStyle: React.CSSProperties = {
    maxWidth: `${maxImageSize}px`,
    maxHeight: `${maxImageSize}px`,
    width: 'auto',
    height: 'auto',
  };
  const shuffledLogos = shuffleArray([...logos]);
  const loopedLogos = [...shuffledLogos, ...shuffledLogos];
  return (
    <ul className='scroll__inner'>
      {loopedLogos.map((logoUrl: string, index: number) => {
        const logoName = logoUrl.match(/\/([^/]+)-logo\./)![1];

        return (
          <li
            key={index}
            className='scroll__inner'
            style={{
              width: `${circleSize}px`,
              height: `${circleSize}px`,
              borderRadius: '50%',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: logoToBackgroundColor[logoName] || 'transparent',
            }}
          >
            <img src={logoUrl} alt={`Logo ${index + 1}`} style={imageStyle} />
          </li>
        );
      })}
    </ul>
  );
}

export default LogoCircleGallery;
