import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

import GlobalStyle from '../base/GlobalStyle';

/**
 * Styled Components
 */
const LayoutBlock = styled.div``;

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
      <LayoutBlock>{children}</LayoutBlock>
    </>
  );
};

Default.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Default;
