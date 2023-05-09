import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function List(props) {
  const users = props.users;
  const heading = props.heading;
  return (
    <div className="offset-4 col-4">
      <h1 className="text-center">{heading}</h1>
      {users
        ? users.map(user => {
            return (
              <div key={user.id} className="border border-solid font-large">
                <Link to={`/users/${user.id}`}>{user.login}</Link>
              </div>
            );
          })
        : ''}
    </div>
  );
}

List.propTypes = {
  getAllUser: PropTypes.func,
  user: PropTypes.any,
  users: PropTypes.any,
  heading: PropTypes.any
};
