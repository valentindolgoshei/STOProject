import React from 'react';
import PropTypes from 'prop-types';

export default function Card(props) {
  const { user } = props;
  return (
    <div className="offset-3 col-6">
      <h1 className="mt-3 text-center">{user.login}</h1>
    </div>
  );
}

Card.propTypes = {
  user: PropTypes.any
};
