import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { formatDate } from '../../common/formatDate';

export default function OrdersTable(props) {
  const { orders } = props;
  return (
    <div>
      <h2 className="text-center">Заказы</h2>
      <Link to="/orders/new-order">
        <button
          type="button"
          className="btn btn-outline-primary offset-md-9 col-md-2 my-1">
          Новый заказ
        </button>
      </Link>
      <table className="table table-striped offset-sm-1 col-sm-10">
        <tr>
          <th>ID заказа</th>
          <th>Автомобиль</th>
          <th>Неисправность</th>
          <th>Дата поступления</th>
          <th>Ожидаемая стоимость</th>
          <th>Статус заказа</th>
          <th>Действия с заказом</th>
        </tr>
        <tbody className="border-dark">
          {orders.map(order => {
            return (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.auto}</td>
                <td>{order.defect}</td>
                <td>{formatDate(order.receivedOn)}</td>
                <td>{order.expectedCost} BYN</td>
                <td>{order.status}</td>
                <td>
                  <button className="btn btn-outline-info col-sm-12 mb-3">
                    Просмотреть/изменить
                  </button>
                  <button className="btn btn-outline-danger col-sm-12 mb-3">
                    Удалить
                  </button>
                </td>
              </tr>
            );
          })}
          <tr />
        </tbody>
      </table>
    </div>
  );
}

OrdersTable.propTypes = {
  orders: PropTypes.any
};
