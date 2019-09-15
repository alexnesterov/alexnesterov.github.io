import React from 'react';
import styled from 'styled-components';

import { _color } from '../base/constants';

/**
 * Styled components
 */
const SocialBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SocialLink = styled.a`
  display: inline-block;
  color: ${_color.dark};
  font-size: 0.75rem;
  line-height: 1;
  font-weight: 700;
  text-transform: uppercase;
  text-decoration: none;
  margin-bottom: 18px;
  letter-spacing: 1px;

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    color: ${_color.accent};
  }
`;

const Social = () => {
  return (
    <SocialBlock>
      <SocialLink href="https://github.com/alexnesterov" target="_blank">
        GitHub
      </SocialLink>
      <SocialLink
        href="https://www.instagram.com/_alexnesterov/"
        target="_blank"
      >
        Instagram
      </SocialLink>
      <SocialLink href="https://t.me/alexnesterov" target="_blank">
        Telegram
      </SocialLink>
      <SocialLink href="mailto:ialexnesterov@gmail.com">
        ialexnesterov@gmail.com
      </SocialLink>
    </SocialBlock>
  );
};

export default Social;
