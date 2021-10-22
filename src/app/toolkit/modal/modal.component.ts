import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input()
  title : string;

  @Input()
  opened  : boolean = false;

  @Output()
  openedChange : EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input()
  htmlMessage : string = null;

  constructor() { }

  ngOnInit() {
  }

  close() {
    this.opened = false;
    this.openedChange.emit(this.opened);
  }  
}
