import React from 'react';
import styled from 'styled-components';
import { _color } from '../../base/constants';

import Container from '../Container';
import { Link } from 'gatsby';

/**
 * Styled Components
 */
const FooterBlock = styled.div`
  padding: 75px 0;
  text-align: center;
`;

const FooterInner = styled(Container)``;

const FooterCopyright = styled.div`
  font-size: 0.875rem;
  text-transform: uppercase;
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

/**
 * Footer Component
 */
const Footer = () => {
  return (
    <FooterBlock>
      <FooterInner>
        <FooterCopyright>
          &copy;{' '}
          <FooterName to="/">
            <span>Alex</span>
            Nesterov
          </FooterName>
          , 2018
        </FooterCopyright>
      </FooterInner>
    </FooterBlock>
  );
};

export default Footer;
