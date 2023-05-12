import React from 'react';
import PropTypes from 'prop-types';

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
          value={user.name}
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
          value={user.birthDate}
          type="date"
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
          value={user.rank}
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
          value={user.specialization}
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
          value={user.yearsOfExperience}
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
          value={user.salary}
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
          value={user.education}
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
          value={user.phoneNumber}
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
          value={user.isAdmin}
          id="isAdmin"
          defaultValue="false"
          required>
          <option value="true">Да</option>
          <option value="false">Нет</option>
        </select>
        {props.errors.isAdmin && (
          <span className="text-danger">{props.errors.isAdmin}</span>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="name">Логин</label>
        <input
          value={user.login}
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
          value={user.email}
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
