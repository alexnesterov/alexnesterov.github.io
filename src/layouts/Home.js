import React from 'react';
import PropTypes from 'prop-types';

import Layout from './Default';

const Home = ({ children }) => {
  return (
    <Layout>
      {children}
    </Layout>
  );
};

Home.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Home;
