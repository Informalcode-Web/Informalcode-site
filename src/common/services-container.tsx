import React, { ReactNode } from 'react';
import {} from '@mui/material';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';

interface ServicesContainerProps {
  heading: string;
  body: string;
  svg?: ReactNode;
  }
  
  const ServicesContainer: React.FC<ServicesContainerProps> = ({ heading, body, svg }) => {
    return (
      <div className="service-container">
        {svg && <div className="svg-container">{svg}</div>}
        <Typography variant="h3">{heading}</Typography>
        <Typography variant="body1">{body}</Typography>
      </div>
    );  
  };
  
  ServicesContainer.propTypes = {
    heading: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    svg: PropTypes.node,
  };

   
export default ServicesContainer;
