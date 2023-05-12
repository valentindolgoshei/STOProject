import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

export default function Card(props) {
  const { user } = props;
  return (
    <div className="offset-3 col-6">
      <div className="card">
        <div className="card-header">Данные сотрудника {user.login}</div>
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
      <button type="button" className="btn btn-dark offset-4 col-4">
        Редактировать профиль
      </button>
    </div>
  );
}

Card.propTypes = {
  user: PropTypes.any
};

function formatDate(dateString) {
  const date = new Date(dateString);
  return moment(date).format('DD-MM-YYYY');
}
