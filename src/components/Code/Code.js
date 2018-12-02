import React from 'react';
import styled from 'styled-components';

import code from './code.svg';

/**
 * Styled Components
 */
const CodeBlock = styled.div``;

const CodeImage = styled.img`
  display: inline-block;
  vertical-align: top;
  margin: 0;
`;

/**
 * Code Component
 */
const Code = () => {
  return (
    <CodeBlock>
      <CodeImage src={code} alt="Code brackets"/>
    </CodeBlock>
  );
};

export default Code;
