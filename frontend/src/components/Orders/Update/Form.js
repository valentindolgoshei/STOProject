import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

export default function Form(props) {
  const { users, order } = props;
  return (
    <form
      className="mt-5 mb-5 offset-sm-2 offset-md-3 offset-lg-4 col-sm-8 col-md-6 col-lg-4 border"
      onChange={props.handleChange}>
      <h3 className="text-center mt-3 mb-3">Новый заказ</h3>
      <div className="form-group">
        <label htmlFor="auto">Автомобиль</label>
        <input
          defaultValue={order.auto}
          type="text"
          className="form-control"
          id="auto"
          placeholder="Автомобиль"
          title="Автомобиль"
          aria-describedby="nameHelp"
          required
        />
        {props.errors.auto && (
          <span className="text-danger">{props.errors.auto}</span>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="model">Модель</label>
        <input
          defaultValue={order.model}
          type="text"
          className="form-control"
          id="model"
          placeholder="Модель"
          title="Модель"
          aria-describedby="nameHelp"
          required
        />
        {props.errors.model && (
          <span className="text-danger">{props.errors.model}</span>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="defect">Неисправность</label>
        <input
          defaultValue={order.defect}
          type="text"
          className="form-control"
          id="defect"
          placeholder="Неисправность"
          title="Неисправность"
          aria-describedby="nameHelp"
          required
        />
        {props.errors.defect && (
          <span className="text-danger">{props.errors.defect}</span>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="status">Статус заказа</label>
        <select
          defaultValue={order.status}
          type="text"
          className="form-control"
          id="status"
          placeholder="Статус заказа"
          title="Статус заказа"
          aria-describedby="nameHelp"
          required>
          <option>Принят</option>
          <option>Выполняется</option>
          <option>Выполнен</option>
        </select>
        {props.errors.status && (
          <span className="text-danger">{props.errors.status}</span>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="receivedOn">Дата поступления</label>
        <input
          defaultValue={moment(order.receivedOn).format('YYYY-MM-DD')}
          type="date"
          className="form-control"
          id="receivedOn"
          placeholder="Дата поступления"
          title="Дата поступления"
          aria-describedby="nameHelp"
          required
        />
        {props.errors.receivedOn && (
          <span className="text-danger">{props.errors.receivedOn}</span>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="expectedCompletionOn">Ожидаемая дата выполнения</label>
        <input
          defaultValue={moment(order.expectedCompletionOn).format('YYYY-MM-DD')}
          type="date"
          className="form-control"
          id="expectedCompletionOn"
          placeholder="Ожидаемая дата выполнения"
          title="Ожидаемая дата выполнения"
          aria-describedby="nameHelp"
          required
        />
        {props.errors.expectedCompletionOn && (
          <span className="text-danger">
            {props.errors.expectedCompletionOn}
          </span>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="expectedCost">Ожидаемая стоимость заказа, BYN</label>
        <input
          defaultValue={order.expectedCost}
          type="number"
          className="form-control"
          id="expectedCost"
          placeholder="Ожидаемая стоимость заказа, BYN"
          title="Ожидаемая стоимость заказа, BYN"
          aria-describedby="nameHelp"
          required
        />
        {props.errors.expectedCost && (
          <span className="text-danger">{props.errors.expectedCost}</span>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="userId">Сотрудник</label>
        <select
          className="form-control"
          id="userId"
          defaultValue={order.userId}>
          {' '}
          {users.map(user => {
            return (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            );
          })}
        </select>
        {props.errors.userId && (
          <span className="text-danger">{props.errors.userId}</span>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="customer">Заказчик</label>
        <input
          defaultValue={order.customer}
          type="text"
          className="form-control"
          id="customer"
          placeholder="Заказчик"
          title="Заказчик"
          aria-describedby="nameHelp"
          required
        />
        {props.errors.customer && (
          <span className="text-danger">{props.errors.customer}</span>
        )}
      </div>
      <button
        type="button"
        className="btn btn-outline-primary col-sm-12 mb-3"
        onClick={props.handleSubmit}>
        Обновить заказ
      </button>
    </form>
  );
}

Form.propTypes = {
  order: PropTypes.object,
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
  errors: PropTypes.object,
  users: PropTypes.any
};
