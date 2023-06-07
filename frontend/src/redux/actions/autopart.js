import request from '../../utils/request';
import { ERROR, SET_AUTOPART, SET_AUTOPARTS } from './types';

export const getAutoparts = () => {
  return dispatch => {
    return request('GET', 'api/autoparts')
      .then(response => {
        const autoparts = response;
        dispatch(setAutoparts(autoparts));
      })
      .catch(err => {
        dispatch({
          type: ERROR,
          payload: err
        });
      });
  };
};

export const createAutopart = (history, autopartData) => {
  const sentAutopartData = mapAutopartDataToSendAutopartData(autopartData);
  return dispatch => {
    return request('POST', `api/autoparts`, sentAutopartData)
      .then(() => {
        alert('Запчасть добавлена');
        history.push('/autoparts');
      })
      .catch(err => {
        const errorsMessage = err.response.data.message;
        const errorsObject = {};
        errorsMessage.forEach(error => {
          errorsObject[error.property] =
            error.constraints[Object.keys(error.constraints)[0]];
        });
        dispatch({
          type: ERROR,
          payload: {
            createAutopart: errorsObject
          }
        });
      });
  };
};

export const updateAutopart = (history, autopartData) => {
  const sentAutopartData = mapAutopartDataToSendAutopartData(autopartData);
  return dispatch => {
    return request('PUT', `api/autoparts/${autopartData.id}`, sentAutopartData)
      .then(() => {
        alert('Данные запчасти обновлены');
        history.push('/autoparts');
      })
      .catch(err => {
        const errorsMessage = err.response.data.message;
        const errorsObject = {};
        errorsMessage.forEach(error => {
          errorsObject[error.property] =
            error.constraints[Object.keys(error.constraints)[0]];
        });
        dispatch({
          type: ERROR,
          payload: {
            updateAutopart: errorsObject
          }
        });
      });
  };
};

export const getAutopart = autopartId => {
  return dispatch => {
    return request('GET', `api/autoparts/${autopartId}`)
      .then(response => {
        const autopart = response;
        dispatch(setAutopart(autopart));
      })
      .catch(err => {
        console.error('Error getting autopart ', err);
      });
  };
};

export const deleteAutopart = autopartId => {
  return () => {
    return request('DELETE', `api/autoparts/${autopartId}`)
      .then(() => {
        alert('Запчасть удалена!');
      })
      .catch(() => {
        alert('Не удалось удалить запчасть');
      });
  };
};

export const setAutoparts = autoparts => {
  return {
    type: SET_AUTOPARTS,
    payload: autoparts
  };
};

export const setAutopart = autopart => {
  return {
    type: SET_AUTOPART,
    payload: autopart
  };
};

function mapAutopartDataToSendAutopartData(autopartData) {
  return {
    ...autopartData,
    yearOfProduction: new Date(autopartData.yearOfProduction),
    amount: Number(autopartData.amount)
  };
}
