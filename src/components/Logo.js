import React from 'react';
import styled from 'styled-components';
import { _color } from '../base/constants';

/**
 * Styled Components
 */
const LogoBlock = styled.a`
  position: relative;
  display: inline-block;
  vertical-align: top;
  padding: 0.3125em 0.625em;
  color: ${_color.light};
  font-size: 1.25rem;
  line-height: 1;
  font-weight: 400;
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;
  letter-spacing: 2px;
  cursor: pointer;

  &:hover {
    color: ${_color.light};
  }

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: ${_color.dark};
  }

  span {
    font-weight: 700;
  }
`;

const LogoWrap = styled.div`
  position: relative;
  z-index: 1;
`;

/**
 * Component
 */
const Logo = () => {
  return (
    <LogoBlock>
      <LogoWrap>
        <span>Alex</span>
        Nesterov
      </LogoWrap>
    </LogoBlock>
  );
};

export default Logo;
