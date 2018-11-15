import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import 'normalize.css';
import GlobalStyle from '../base/GlobalStyle';

const Default = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
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
          <link href="https://fonts.googleapis.com/css?family=Fira+Mono:400,500,700" rel="stylesheet"></link>
        </Helmet>
        <div>
          {children}
        </div>
      </>
    )}
  />
);

Default.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Default;
