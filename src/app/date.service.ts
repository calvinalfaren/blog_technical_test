import {Injectable} from '@angular/core';

@Injectable()
export class DateService {

  constructor() {
  }

  getDateTime(timestamp: string): string {
    let date: Date = new Date(parseInt(timestamp) * 1000);
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    return ('0' + date.getDate()).slice(-2) + ' ' + months[date.getMonth()] + ' ' + date.getFullYear() + ' '
      + ('0' + date.getHours()).slice(-2) + ':' + ('0' + date.getMinutes()).slice(-2);
  }

  getDate(timestamp: string): string {
    let date: Date = new Date(parseInt(timestamp) * 1000);
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return ('0' + date.getDate()).slice(-2) + ' ' + months[date.getMonth()] + ' ' + date.getFullYear();
  }

  getDateWithFormat(timestamp: string): string {
    let date: Date = new Date(parseInt(timestamp) * 1000);
    return date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2);
  }

  getTime(timestamp: string): string {

    let date: Date = new Date(parseInt(timestamp) * 1000);

    return ('0' + date.getHours()).slice(-2) + ':' + ('0' + date.getMinutes()).slice(-2);
  }

  getDateNumberFormat(timestamp: string) {
    let date: Date = new Date(parseInt(timestamp) * 1000);
    let months = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
    return ('0' + date.getDate()).slice(-2) + '/' + months[date.getMonth()] + '/' + date.getFullYear();
  }
}
