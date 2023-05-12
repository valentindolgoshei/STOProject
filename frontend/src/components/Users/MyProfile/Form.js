import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

export default function Form(props) {
  const { user } = props;
  return (
    <form
      className="mt-5 mb-5 offset-sm-2 offset-md-3 offset-lg-4 col-sm-8 col-md-6 col-lg-4 border"
      onChange={props.handleChange}>
      <h3 className="text-center mt-3 mb-3">Мой профиль</h3>
      <div className="form-group">
        <label htmlFor="name">ФИО</label>
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="ФИО"
          title="ФИО"
          defaultValue={user.name}
          aria-describedby="nameHelp"
          required
        />
        {props.errors.name && (
          <span className="text-danger">{props.errors.name}</span>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="birthDate">Дата рождения</label>
        <input
          type="date"
          defaultValue={moment(user.birthDate).format('YYYY-MM-DD')}
          className="form-control"
          id="birthDate"
          placeholder="Дата рождения"
          title="Дата рождения"
          aria-describedby="nameHelp"
          required
        />
        {props.errors.birthDate && (
          <span className="text-danger">{props.errors.birthDate}</span>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="rank">Rank</label>
        <input
          defaultValue={user.rank}
          type="number"
          className="form-control"
          id="rank"
          placeholder="Разряд"
          title="Разряд"
          aria-describedby="nameHelp"
          required
        />
        {props.errors.rank && (
          <span className="text-danger">{props.errors.rank}</span>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="specialization">Специализация</label>
        <input
          defaultValue={user.specialization}
          type="text"
          className="form-control"
          id="specialization"
          placeholder="Специализация"
          title="Специализация"
          aria-describedby="nameHelp"
          required
        />
        {props.errors.specialization && (
          <span className="text-danger">{props.errors.specialization}</span>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="yearsOfExperience">Стаж, лет</label>
        <input
          defaultValue={user.yearsOfExperience}
          type="number"
          className="form-control"
          id="yearsOfExperience"
          placeholder="Стаж, лет"
          title="Стаж, лет"
          aria-describedby="nameHelp"
          required
        />
        {props.errors.yearsOfExperience && (
          <span className="text-danger">{props.errors.yearsOfExperience}</span>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="salary">Заработная плата</label>
        <input
          defaultValue={user.salary}
          type="number"
          className="form-control"
          id="salary"
          placeholder="Заработная плата"
          title="Заработная плата"
          aria-describedby="nameHelp"
          required
        />
        {props.errors.salary && (
          <span className="text-danger">{props.errors.salary}</span>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="education">Образование</label>
        <input
          type="text"
          defaultValue={user.education}
          className="form-control"
          id="education"
          placeholder="Образование"
          title="Образование"
          aria-describedby="nameHelp"
          required
        />
        {props.errors.education && (
          <span className="text-danger">{props.errors.education}</span>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="phoneNumber">Номер телефона</label>
        <input
          type="text"
          defaultValue={user.phoneNumber}
          className="form-control"
          id="phoneNumber"
          placeholder="Номер телефона"
          title="Номер телефона"
          aria-describedby="nameHelp"
          required
        />
        {props.errors.phoneNumber && (
          <span className="text-danger">{props.errors.phoneNumber}</span>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="admin">Админ</label>
        <select
          className="form-control"
          defaultValue={user.isAdmin}
          id="isAdmin"
          required>
          <option defaultValue="true">Да</option>
          <option defaultValue="false">Нет</option>
        </select>
        {props.errors.isAdmin && (
          <span className="text-danger">{props.errors.isAdmin}</span>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="name">Логин</label>
        <input
          defaultValue={user.login}
          type="text"
          className="form-control"
          id="login"
          placeholder="Логин"
          title="Логин"
          aria-describedby="nameHelp"
          required
        />
        {props.errors.login && (
          <span className="text-danger">{props.errors.login}</span>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="email">E-mail:</label>
        <input
          defaultValue={user.email}
          type="email"
          className="form-control"
          id="email"
          placeholder="Email"
          title="Email"
          aria-describedby="emailHelp"
        />
        {props.errors.email && (
          <span className="text-danger">{props.errors.email}</span>
        )}
      </div>
      <button
        type="button"
        className="btn btn-outline-primary col-sm-12 mb-3"
        onClick={props.handleSubmit}>
        Обновить данные
      </button>
    </form>
  );
}

Form.propTypes = {
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
  errors: PropTypes.object,
  user: PropTypes.any
};
