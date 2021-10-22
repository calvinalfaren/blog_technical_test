import {Injectable} from '@angular/core';
import {ToastrConfig, ToastrService} from 'ngx-toastr';

const types = ['success', 'error', 'info', 'warning'];

@Injectable()
export class ToasterService {

  options: ToastrConfig;

  private lastInserted: number[] = [];

  constructor(public toastrService: ToastrService) {
    this.options = this.toastrService.toastrConfig;
  }

  openToast(title: string, message: string, type: string) {
    const opt = JSON.parse(JSON.stringify(this.options));
    const inserted = this.toastrService[type](message, title, opt);
    if (inserted) {
      this.lastInserted.push(inserted.toastId);
    }
    return inserted;
  }

  clearToasts() {
    this.toastrService.clear();
  }

  clearLastToast() {
    this.toastrService.clear(this.lastInserted.pop());
  }

}
