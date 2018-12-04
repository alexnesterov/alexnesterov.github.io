import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ContainerBlock = styled.div`
  max-width: 970px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
`;

const Container = ({ className, children }) => {
  return <ContainerBlock className={className}>{children}</ContainerBlock>;
};

Container.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Container;
