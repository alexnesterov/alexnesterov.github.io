import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { rgba } from 'polished';

import { _color } from '../../base/constants';

import notFoundImage from './404.gif';

/**
 * Styled Components
 */
const NotFoundBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -50px;
  padding: 0 30px;

  &:before {
    content: '';
    position: absolute;
    left: -1px;
    top: 0;
    z-index: 1;
    width: 1px;
    height: 100%;
    background: ${_color.white};
  }

  &:after {
    content: '';
    position: absolute;
    left: 15px;
    top: 0;
    z-index: 1;
    width: 1px;
    height: 100%;
    background: ${_color.secondary};
  }
`;

const NotFoundImage = styled.img`
  display: block;
  margin: 0;
  width: 300px;
  height: auto;
`;

const NotFoundMessage = styled.div`
  margin-bottom: 30px;
  font-size: 1.125rem;
  line-height: 1.6;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 4px;
  text-shadow: 0 4px 4px ${rgba(_color.dark, 0.2)};
`;

const NotFoundEmoji = styled.div`
  margin-bottom: 30px;
  font-size: 1.5rem;
`;

const NotFoundAction = styled.div`
  text-transform: uppercase;
  letter-spacing: 1px;
`;

/**
 * NotFound Component
 */
const NotFound = () => {
  return (
    <NotFoundBlock>
      <NotFoundImage src={notFoundImage} />
      <NotFoundMessage>Cтраница не найдена</NotFoundMessage>
      <NotFoundEmoji>
        <span role="img" aria-label="Eyes">
          👀
        </span>
      </NotFoundEmoji>
      <NotFoundAction>
        <Link to="/">На главную</Link>
      </NotFoundAction>
    </NotFoundBlock>
  );
};

export default NotFound;
