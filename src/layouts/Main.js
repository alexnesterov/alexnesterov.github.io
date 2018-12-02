import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Layout from './Default';
import Header from '../components/Header';
import Footer from '../components/Footer';

/**
 * Styled Components
 */
const MainLayoutBlock = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainLayoutHeader = styled.header``;

const MainLayoutContent = styled.main`
  flex: 1 1 100%;
`;

const MainLayoutFooter = styled.footer``;

/**
 * MainLayout Component
 */
const MainLayout = ({ children }) => {
  return (
    <Layout>
      <MainLayoutBlock>
        <MainLayoutHeader>
          <Header />
        </MainLayoutHeader>
        <MainLayoutContent>{children}</MainLayoutContent>
        <MainLayoutFooter>
          <Footer />
        </MainLayoutFooter>
      </MainLayoutBlock>
    </Layout>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
