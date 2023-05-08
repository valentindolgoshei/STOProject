import React from 'react';

export default function Card(props) {
  const { user } = props;
  return (
    <div className="offset-3 col-6">
      <h1 className="mt-3 text-center">{user.login}</h1>
    </div>
  );
}
