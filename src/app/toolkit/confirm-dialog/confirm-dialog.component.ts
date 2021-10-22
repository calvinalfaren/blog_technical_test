import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {

  @Input() 
  title : string;

  _opened : boolean = false;

  @Output()
  cancel : EventEmitter<any> = new EventEmitter<any>();

  @Output()
  yes : EventEmitter<any> = new EventEmitter<any>();

  @Input()
  get opened() : boolean {
    return this._opened;
  }

  @Input()
  data : any = null;

  @Output()
  openedChange : EventEmitter<boolean> = new EventEmitter<boolean>();

  set opened(opened : boolean) {
    this._opened = opened;
    this.openedChange.emit(this._opened);
  }

  constructor() { }

  ngOnInit() {
  }

  triggerYes(event : Event) {
    this.opened = false;
    this.yes.emit(this.data);
  }

  triggerCancel(event : Event) {
    this.opened = false;
    this.cancel.emit();
  }
}
