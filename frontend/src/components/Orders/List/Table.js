import React from 'react';
import { Link } from 'react-router-dom';

export default function OrdersTable() {
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
          <th>Ожидаемая стоимость, BYN</th>
          <th>Действия с заказом</th>
        </tr>
      </table>
    </div>
  );
}
