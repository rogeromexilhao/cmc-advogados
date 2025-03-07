import React from 'react';
import PropTypes from 'prop-types';

const IfComponent = ({ conditional, children }) => {
  return conditional ? children : null;
};

IfComponent.propTypes = {
  conditional: PropTypes.bool.isRequired,
  children: PropTypes.node,
};

export default IfComponent;
