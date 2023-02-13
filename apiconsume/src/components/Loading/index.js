import React from 'react';
import PropTypes from 'prop-types';
import { FaSpinner } from 'react-icons/fa';
import { Container } from './style';

export default function Loading({ isLoading }) {
  if (!isLoading) return <></>;

  return (
    <Container>
      <div />
      <span>
        <FaSpinner />
        Loading...
      </span>
    </Container>
  );
}

Loading.defaultProps = {
  isLoading: false,
};

Loading.propTypes = {
  isLoading: PropTypes.bool,
};
