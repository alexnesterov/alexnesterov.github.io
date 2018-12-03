import React from 'react';
import styled from 'styled-components';

import Layout from '../layouts/Main';
import Info from '../components/Info';

/**
 * Styled Components
 */
const IndexPageInfo = styled.div`
  margin-bottom: 80px;
`;

/**
 * IndexPage Component
 */
const IndexPage = () => (
  <Layout>
    <IndexPageInfo>
      <Info />
    </IndexPageInfo>
  </Layout>
);

export default IndexPage;
