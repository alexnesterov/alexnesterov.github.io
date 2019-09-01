import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

import GlobalStyle from '../base/GlobalStyle';

import Header from './Header';
import Footer from './Footer';

/**
 * Styled Components
 */
const LayoutBlock = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const LayoutHeader = styled.header``;

const LayoutContent = styled.main`
  flex: 1 1 100%;
`;

const LayoutFooter = styled.footer``;

/**
 * Component
 */
const Default = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <GlobalStyle />
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      >
        <html lang="ru" />
        <link
          href="https://fonts.googleapis.com/css?family=Fira+Mono:400,500,700"
          rel="stylesheet"
        />
      </Helmet>
      <LayoutBlock>
        <LayoutHeader>
          <Header />
        </LayoutHeader>
        <LayoutContent>{children}</LayoutContent>
        <LayoutFooter>
          <Footer />
        </LayoutFooter>
      </LayoutBlock>
    </>
  );
};

Default.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Default;
