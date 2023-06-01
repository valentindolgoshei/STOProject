import React from 'react';
import PropTypes from 'prop-types';

export default function Form(props) {
  return (
    <form
      className="mt-5 mb-5 offset-sm-2 offset-md-3 offset-lg-4 col-sm-8 col-md-6 col-lg-4 border"
      onChange={props.handleChange}>
      <h3 className="text-center mt-3 mb-3">Регистрация</h3>
      <div className="form-group">
        <label htmlFor="name">ФИО</label>
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="ФИО"
          title="name"
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
          className="form-control"
          id="birthDate"
          placeholder="Дата рождения"
          title="Birth date"
          aria-describedby="nameHelp"
          required
        />
        {props.errors.birthDate && (
          <span className="text-danger">{props.errors.birthDate}</span>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="rank">Разряд</label>
        <input
          type="number"
          className="form-control"
          id="rank"
          placeholder="Разряд"
          title="Rank"
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
          type="text"
          className="form-control"
          id="specialization"
          placeholder="Специализация"
          title="Specialization"
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
          type="number"
          className="form-control"
          id="yearsOfExperience"
          placeholder="Стаж, лет"
          title="Years of Experience"
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
          type="number"
          className="form-control"
          id="salary"
          placeholder="Заработная плата, BYN"
          title="Salary"
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
          className="form-control"
          id="education"
          placeholder="Образование"
          title="Education"
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
          className="form-control"
          id="phoneNumber"
          placeholder="Номер телефона"
          title="Phone Number"
          aria-describedby="nameHelp"
          required
        />
        {props.errors.phoneNumber && (
          <span className="text-danger">{props.errors.phoneNumber}</span>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="name">Логин</label>
        <input
          type="text"
          className="form-control"
          id="login"
          placeholder="Логин"
          title="Придумайте себе веселый логин!"
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
          type="email"
          className="form-control"
          id="email"
          placeholder="Email"
          title="Пожалуйста, введите существующий адрес"
          aria-describedby="emailHelp"
        />
        {props.errors.email && (
          <span className="text-danger">{props.errors.email}</span>
        )}
        <span id="emailHelp" className="form-text text-muted">
          Пожалуйста, введите существующий адрес
        </span>
      </div>
      <div className="form-group">
        <label htmlFor="password">Пароль</label>
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="Пароль"
          aria-describedby="passwordHelp"
          title="Придумайте сложный пароль"
        />
        {props.errors.password && (
          <span className="text-danger">{props.errors.password}</span>
        )}
        <span id="passwordHelp" className="form-text text-muted">
          Придумайте сложный пароль
        </span>
      </div>
      <button
        type="button"
        className="btn btn-outline-primary col-sm-12 mb-3"
        onClick={props.handleSubmit}>
        Зарегистрироваться
      </button>
    </form>
  );
}

Form.propTypes = {
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
  errors: PropTypes.object
};
