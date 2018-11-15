import React from 'react';
import styled, { keyframes } from 'styled-components';

import Logo from '../Logo';
import Container from '../Container';
import BackImage from './back.jpg';
import Back2Image from './back2.png';
import Back3Image from './back3.png';
import Social from '../Social';

import { _media } from '../../base/constants';

/**
 * Styled Components
 */
const glitch = keyframes`
  0% {
    z-index: -1;
  }
  25% {
    z-index: -1;
  }
  26% {
    z-index: 1;
  }
  46% {
    z-index: -1;
  }
  89% {
    z-index: -1;
  }
  90% {
    z-index: 1;
  }
  100% {
    z-index: -1;
  }
`;

const WelcomeBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  min-height: 100vh;
  background: #000 url(${BackImage}) no-repeat center;
  background-size: cover;
  color: #fff;

  ${_media.tablet`
    padding: 0 15px;
  `};

  :before,
  :after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    opacity: 0.2;
    animation: ${glitch} 12s infinite;
  }

  :before {
    background: url(${Back2Image}) no-repeat center;
    animation-delay: 0.5s;
  }

  :after {
    background: url(${Back3Image}) no-repeat center;
  }
`;

const WelcomeCover = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  background: #000;
  opacity: 0.2;
`;

const WelcomeInner = styled(Container)`
  z-index: 2;
  flex: 1 1 0%;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const WelcomeHeader = styled.header``;

const WelcomeLogo = styled.div`
  padding: 80px 0;
  text-align: left;
`;

const WelcomeMain = styled.div`
  flex: 1 1 0%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const WelcomeTitle = styled.div`
  margin-bottom: 35px;
  font-size: 24px;
  line-height: 1.2;
  font-weight: 500;
  text-transform: uppercase;
`;

const WelcomeText = styled.div`
  max-width: 600px;
  font-size: 20px;
  line-height: 1.5;
`;

const WelcomeSocial = styled.div`
  padding: 80px 0;
`;

/**
 * Component
 */
const Welcome = () => {
  return (
    <WelcomeBlock>
      <WelcomeCover />
      <WelcomeInner>
        <WelcomeHeader>
          <WelcomeLogo>
            <Logo />
          </WelcomeLogo>
        </WelcomeHeader>
        <WelcomeMain>
          <WelcomeTitle>Привет. Я Александр, веб-разработчик.</WelcomeTitle>
          <WelcomeText>
            Cпециализируюсь на фронтенде.
            <br />
            Верстаю, адаптивно, валидно и кроссбраузерно, делаю несложные сайты.
            <br />
            Перфекционист, люблю веб и минимализм.
          </WelcomeText>
          <WelcomeSocial>
            <Social />
          </WelcomeSocial>
        </WelcomeMain>
      </WelcomeInner>
    </WelcomeBlock>
  );
};

export default Welcome;
