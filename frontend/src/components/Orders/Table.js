import PropTypes from 'prop-types';
import React from 'react';

export default function OrdersTable() {
  return (
    <div>
      <h2 className="text-center my-5">Заказы</h2>
      <table className="table table-striped my-5 offset-sm-1 col-sm-10">
        <tr>
          <th>ID заказа</th>
          <th>Автомобиль</th>
          <th>Неисправность</th>
          <th>Дата поступления</th>
          <th>Ожидаемая стоимость, BYN</th>
        </tr>
      </table>
    </div>
  );
}

OrdersTable.propTypes = {
  orders: PropTypes.any
};
