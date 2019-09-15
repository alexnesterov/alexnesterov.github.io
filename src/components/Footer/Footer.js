import React from 'react';
import styled, { keyframes } from 'styled-components';
import { _color, _media } from '../../base/constants';

import Container from '../Container';
import { Link } from 'gatsby';

import imageOriginal from './man-with-phone_500.jpg';
import imageGlitched from './man-with-phone_glitch.gif';

/**
 * Styled Components
 */
const glitch = keyframes`
  0% {
    opacity: 0;
  }
  25% {
    opacity: 0;
  }
  26% {
    opacity: 0.4;
  }
  36% {
    opacity: 0;
  }
  89% {
    opacity: 0;
  }
  90% {
    opacity: 0.4;
  }
  100% {
    opacity: 0;
  }
`;

const FooterBlock = styled.div`
  position: relative;
  padding: 80px 0;
  text-align: center;
`;

const FooterInner = styled(Container)``;

const FooterCopyright = styled.div`
  font-size: 0.875rem;
  text-transform: uppercase;

  ${_media.mobile`
    margin-right: 39%;
  `};
`;

const FooterName = styled(Link)`
  cursor: pointer;
  color: ${_color.dark};

  &:hover {
    color: ${_color.accent};
  }

  span {
    font-weight: 700;
  }
`;

const FooterImage = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: -1;
  max-width: 80%;
  transform: rotateY(180deg);

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: url(${imageGlitched}) no-repeat center;
    background-size: cover;
    opacity: 0;
    animation: ${glitch} 12s infinite;
  }

  &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-top: 20px solid #fff;
    border-right: 30px solid #fff;
    border-bottom: 30px solid transparent;
  }

  img {
    display: block;
    margin: 0;
    max-width: 100%;
  }
`;

/**
 * Footer Component
 */
const Footer = () => {
  let date = new Date(),
      dateYear = date.getFullYear();

  return (
    <FooterBlock>
      <FooterInner>
        <FooterCopyright>
          &copy;&nbsp;
          <FooterName to="/">
            <span>Alex</span>
            Nesterov
          </FooterName>
          ,&nbsp;{dateYear}.
          Посмотреть
          <a href="https://github.com/alexnesterov/alexnesterov.github.io" target="_blank" rel="noopener noreferrer"> исходный&nbsp;код</a>.
        </FooterCopyright>
      </FooterInner>
      <FooterImage>
        <img src={imageOriginal} alt="Man with phone" />
      </FooterImage>
    </FooterBlock>
  );
};

export default Footer;
