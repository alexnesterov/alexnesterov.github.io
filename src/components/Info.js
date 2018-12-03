import React from 'react';
import styled from 'styled-components';

import Container from '../components/Container';

/**
 * Styled Components
 */
const InfoBlock = styled.div``;

const InfoInner = styled(Container)``;

const InfoWrap = styled.div`
  max-width: 460px;
  margin: 0 auto;
  text-align: center;
`;

const InfoTitle = styled.h1`
  margin-top: 0;
  font-size: 1.125rem;
  font-weight: 500;
  text-transform: uppercase;
`;

const InfoBody = styled.div``;

/**
 * Componentq
 */
const Info = () => {
  return (
    <InfoBlock>
      <InfoInner>
        <InfoWrap>
          <InfoTitle>Привет. Я Александр, веб-разработчик.</InfoTitle>
          <InfoBody>
            Cпециализируюсь на фронтенде.
            <br />
            Верстаю, адаптивно, валидно и кроссбраузерно, делаю несложные сайты.
            <br />
            Перфекционист, люблю веб и минимализм.
          </InfoBody>
        </InfoWrap>
      </InfoInner>
    </InfoBlock>
  );
};

export default Info;
