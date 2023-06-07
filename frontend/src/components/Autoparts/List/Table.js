import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MDBDataTable } from 'mdbreact';

export default function AutopartsTable(props) {
  const rows = props.autoparts.map(autopart => {
    let row = {
      article: autopart.article,
      name: autopart.name,
      yearOfProduction: autopart.yearOfProduction,
      amount: autopart.amount,
      vehicle: autopart.vehicle
    };

    row['Просмотр/изменение'] = (
      <button
        type="button"
        className="btn btn-outline-primary offset-md-9 col-md-2 my-1">
        Просмотр/изменение
      </button>
    );

    row['Удаление'] = (
      <button
        type="button"
        className="btn btn-outline-danger col-sm-12 mb-3"
        onClick={() => props.handleDeleteAutopart(autopart.id)}>
        Удалить
      </button>
    );

    return row;
  });

  let columns = [
    {
      label: 'Артикул',
      field: 'article',
      sort: 'asc',
      width: 300
    },
    {
      label: 'Наименование',
      field: 'name',
      sort: 'asc',
      width: 270
    },
    {
      label: 'Год выпуска',
      field: 'yearOfProduction',
      sort: 'asc',
      width: 200
    },
    {
      label: 'Автомобиль',
      field: 'vehicle',
      sort: 'asc',
      width: 200
    },
    {
      label: 'Количество',
      field: 'amount',
      sort: 'asc',
      width: 200
    },
    {
      label: 'Просмотр/изменение',
      field: 'Просмотр/изменение',
      sort: 'asc',
      width: 200
    },
    {
      label: 'Просмотр/изменение',
      field: 'Удаление',
      sort: 'asc',
      width: 200
    }
  ];

  const tableData = {
    columns,
    rows
  };

  return (
    <div className="offset-sm-1 col-sm-10 my-5">
      <h3 className="text-center mt-5">Запчасти</h3>
      {props.isAdmin && (
        <Link to="/autoparts/create-autopart">
          <button
            type="button"
            className="btn btn-outline-primary offset-md-9 col-md-2 my-1">
            Новый заказ
          </button>
        </Link>
      )}
      <MDBDataTable
        striped
        bordered
        small
        data={tableData}
        searchLabel="Поиск"
        entriesLabel="Строк на странице"
        paginationLabel={['Назад', 'Вперёд']}
        infoLabel={['Строки', '-', 'из']}
        responsiveXl={true}
        responsiveSm={true}
        responsiveLg={true}
        responsiveMd={true}
      />
    </div>
  );
}

AutopartsTable.propTypes = {
  autoparts: PropTypes.array,
  isAuthenticated: PropTypes.bool,
  isAdmin: PropTypes.number,
  handleDeleteAutopart: PropTypes.func
};
