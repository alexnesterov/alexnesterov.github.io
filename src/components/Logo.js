import React from 'react';
import styled from 'styled-components';

/**
 * Styled Components
 */
const LogoBlock = styled.a`
  display: inline-block;
  color: #fff;
  font-size: 20px;
  line-height: 1;
  font-weight: 400;
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;
  letter-spacing: 2px;

  span {
    font-weight: 700;
  }
`;

/**
 * Component
 */
const Logo = () => {
  return (
    <LogoBlock>
      Alex<span>Nesterov</span>
    </LogoBlock>
  );
};

export default Logo;
