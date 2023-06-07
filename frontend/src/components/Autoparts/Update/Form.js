import React from 'react';
import PropTypes from 'prop-types';
import { dateToYear } from '../../common/dateToYear';

export default function Form(props) {
  const { autopart } = props;
  return (
    <form
      className="mt-5 mb-5 offset-sm-2 offset-md-3 offset-lg-4 col-sm-8 col-md-6 col-lg-4 border"
      onChange={props.handleChange}>
      <h3 className="text-center mt-3 mb-3">Обновить запчасть</h3>
      <div className="form-group">
        <label htmlFor="article">Артикул</label>
        <input
          defaultValue={autopart.article}
          type="text"
          className="form-control"
          id="article"
          placeholder="Артикул"
          title="Артикул"
          aria-describedby="nameHelp"
          readOnly
          required
        />
        {props.errors.article && (
          <span className="text-danger">{props.errors.article}</span>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="name">Наименование</label>
        <input
          defaultValue={autopart.name}
          type="text"
          className="form-control"
          id="name"
          placeholder="Наименование"
          title="Наименование"
          aria-describedby="nameHelp"
          readOnly
          required
        />
        {props.errors.name && (
          <span className="text-danger">{props.errors.name}</span>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="yearOfProduction">Год выпуска</label>
        <input
          defaultValue={dateToYear(autopart.yearOfProduction)}
          type="number"
          className="form-control"
          id="yearOfProduction"
          placeholder="Год выпуска"
          title="Год выпуска"
          aria-describedby="nameHelp"
          readOnly
          required
        />
        {props.errors.yearOfProduction && (
          <span className="text-danger">{props.errors.yearOfProduction}</span>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="vehicle">Автомобиль</label>
        <input
          defaultValue={autopart.vehicle}
          type="text"
          className="form-control"
          id="vehicle"
          placeholder="Автомобиль"
          title="Автомобиль"
          aria-describedby="nameHelp"
          readOnly
          required
        />
        {props.errors.vehicle && (
          <span className="text-danger">{props.errors.vehicle}</span>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="amount">Количество</label>
        <input
          defaultValue={autopart.amount}
          type="number"
          className="form-control"
          id="amount"
          placeholder="Количество"
          title="Количество"
          aria-describedby="nameHelp"
          required
        />
        {props.errors.amount && (
          <span className="text-danger">{props.errors.amount}</span>
        )}
      </div>
      <button
        type="button"
        className="btn btn-outline-primary col-sm-12 mb-3"
        onClick={props.handleSubmit}>
        Обновить запчасть
      </button>
    </form>
  );
}

Form.propTypes = {
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
  errors: PropTypes.object,
  autopart: PropTypes.object
};
