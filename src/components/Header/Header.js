import React from 'react';
import styled from 'styled-components';
import { _color } from '../../base/constants';

import Container from '../Container';
import Code from '../Code';
import Logo from '../Logo';

/**
 * Styled Components
 */
const HeaderBlock = styled.div`
  margin-bottom: -80px;
`;

const HeaderInner = styled(Container)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 0;

  &:before {
    content: '';
    position: absolute;
    left: 14px;
    top: 0;
    width: 1px;
    height: 100%;
    background: ${_color.secondary};
  }
`;

const HeaderCode = styled.div`
  margin-bottom: 45px;
`;

const HeaderLogo = styled.div``;

/**
 * Header Component
 */
const Header = ({ siteTitle }) => (
  <HeaderBlock>
    <HeaderInner>
      <HeaderCode>
        <Code />
      </HeaderCode>
      <HeaderLogo>
        <Logo />
      </HeaderLogo>
    </HeaderInner>
  </HeaderBlock>
);

export default Header;
