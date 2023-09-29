import angularLogo from '../assets/angular-logo.png';
import awsLogo from '../assets/aws-logo.png';
import bootstrapLogo from '../assets/bootstrap-logo.svg';
import dotnetLogo from '../assets/dotnet-logo.svg';
import nestLogo from '../assets/nestjs-logo.svg';
import html5Logo from '../assets/html5-logo.svg';
import mongodbLogo from '../assets/mongodb-logo.svg';
import netlifyLogo from '../assets/netlify-logo.svg';
import nodejsLogo from '../assets/nodejs-logo.png';
import reactLogo from '../assets/react-logo.svg';
import sqlLogo from '../assets/sql-logo.svg';
import tailwindLogo from '../assets/tailwind-logo.svg';
import typescriptLogo from '../assets/typescript-logo.png';
import vercelLogo from '../assets/vercel-logo.svg';
import figmaLogo from '../assets/figma-logo.svg';

const logos = [
  angularLogo,
  awsLogo,
  bootstrapLogo,
  dotnetLogo,
  nestLogo,
  html5Logo,
  mongodbLogo,
  netlifyLogo,
  nodejsLogo,
  reactLogo,
  sqlLogo,
  tailwindLogo,
  typescriptLogo,
  vercelLogo,
  figmaLogo,
];
const logoToBackgroundColor: Record<string, string> = {
  angular: '#242938',
  aws: '#F2F2F2',
  bootstrap: '#9013FE',
  dotnet: '#512BD4',
  nestjs: '#242938',
  html5: '#E14E1D',
  mongodb: '#F2F2F2',
  netlify: '#4D9ABF',
  nodejs: '#F2F2F2',
  react: '#242938',
  sql: '#000000',
  tailwind: '#44A8B3',
  typescript: '#007ACC',
  vercel: 'black',
  figma: '#242938',
};

export { logos, logoToBackgroundColor };
