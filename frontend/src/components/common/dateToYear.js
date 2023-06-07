import moment from 'moment';

export function dateToYear(date) {
  return moment(new Date(date)).format('YYYY');
}
