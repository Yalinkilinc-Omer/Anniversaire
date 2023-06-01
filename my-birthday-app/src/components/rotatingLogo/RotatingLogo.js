import React from 'react';
import styled, { keyframes } from 'styled-components';
import './rotatingLogo.css';

const rotation = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Logo = styled.img`
  animation: ${rotation} 5s linear infinite;
`;

const RotatingLogo = ({ alt }) => {
  return <Logo className="rotating-logo" src={process.env.PUBLIC_URL + "/logo.svg"} alt={alt} />;
};

export default RotatingLogo;
