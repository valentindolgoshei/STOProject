import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function List(props) {
  const users = props.users;
  const heading = props.heading;
  return (
    <div className="card offset-4 col-4 mt-1">
      <h1 className="text-center">{heading}</h1>
      <ul className="list-group list-group-flush">
        {users
          ? users.map(user => {
              return (
                <li key={user.id} className="list-group-item">
                  <Link to={`/users/${user.id}`}>{user.name}</Link>
                </li>
              );
            })
          : ''}
      </ul>
    </div>
  );
}

List.propTypes = {
  getAllUser: PropTypes.func,
  user: PropTypes.any,
  users: PropTypes.any,
  heading: PropTypes.any
};
