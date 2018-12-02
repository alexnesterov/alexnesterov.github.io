import React from 'react';
import styled from 'styled-components';

import Container from '../Container';
import Code from '../Code';
import Logo from '../Logo';

/**
 * Styled Components
 */
const HeaderBlock = styled.div`
  padding: 75px 0;
`;

const HeaderInner = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
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
