import moment from 'moment';

export function formatDate(dateString) {
  const date = new Date(dateString);
  return moment(date).format('DD-MM-YYYY');
}
