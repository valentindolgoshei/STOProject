import React from 'react';
import PropTypes from 'prop-types';
import { formatDate } from '../../common/formatDate';

export default function Card(props) {
  const { user } = props;
  return (
    <div className="offset-3 col-6 mt-1 mb-2">
      <div className="card">
        <div className="card-header">Данные сотрудника {user.name}</div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">ФИО: {user.name}</li>
          <li className="list-group-item">
            Дата рождения: {formatDate(user.birthDate)}
          </li>
          <li className="list-group-item">Разряд: {user.rank}</li>
          <li className="list-group-item">
            Специализация: {user.specialization}
          </li>
          <li className="list-group-item">
            Стаж (лет): {user.yearsOfExperience}
          </li>
          <li className="list-group-item">
            Заработная плата (BYN): {user.salary}
          </li>
          <li className="list-group-item">Образование: {user.education}</li>
          <li className="list-group-item">
            Номер телефона: {user.phoneNumber}
          </li>
        </ul>
      </div>
    </div>
  );
}

Card.propTypes = {
  user: PropTypes.any
};
