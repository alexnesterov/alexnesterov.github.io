import React from 'react';
import styled from 'styled-components';
import { _color } from '../base/constants';

import Container from '../components/Container';

/**
 * Styled Components
 */
const SectionBlock = styled.section``;

const SectionInner = styled(Container)`
  position: relative;
  padding-top: 80px;
  padding-bottom: 80px;

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

const SectionTitle = styled.h2`
  margin: 0 0 80px;
  padding-left: 30px;
  font-size: 0.875rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 4px;

  &:after {
    content: '';
    display: block;
    width: 100px;
    height: 1px;
    margin: 15px 0 0 -30px;
    background: ${_color.secondary};
  }
`;

const SectionBody = styled.div``;

/**
 * Section Component
 */
const Section = ({ title, children }) => {
  return (
    <SectionBlock>
      <SectionInner>
        {title && <SectionTitle>{title}</SectionTitle>}
        <SectionBody>{children}</SectionBody>
      </SectionInner>
    </SectionBlock>
  );
};

export default Section;
