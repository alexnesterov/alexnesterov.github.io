import React from 'react';
import styled from 'styled-components';

import { _color } from '../base/constants';

/**
 * Styled components
 */
const SocialBlock = styled.div``;
const SocialLink = styled.a`
  display: inline-block;
  color: ${_color.white};
  font-size: 14px;
  line-height: 1;
  font-weight: 500;
  text-transform: uppercase;
  text-decoration: none;
  margin-right: 30px;
  margin-bottom: 15px;
  letter-spacing: 1px;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    color: ${_color.accent};
  }
`;

const Social = () => {
  return (
    <SocialBlock>
      <SocialLink href='https://github.com/alexnesterov' target='_blank'>GitHub</SocialLink>
      <SocialLink href='https://www.instagram.com/a.lexnesterov/' target='_blank'>Instagram</SocialLink>
      <SocialLink href='https://t.me/alexnesterov' target='_blank'>Telegram</SocialLink>
      <SocialLink href='mailto:ialexnesterov@gmail.com'>ialexnesterov@gmail.com</SocialLink>
    </SocialBlock>
  );
};

export default Social;
