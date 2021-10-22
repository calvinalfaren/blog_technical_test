import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  
  @Input()
  actions : string[][] = [];

  @Input()
  columns : string[][];

  @Output()
  action : EventEmitter<ActionData> = new EventEmitter<ActionData>();
  
  @Output()
  changePage : EventEmitter<number> = new EventEmitter<number>();

  @Input() 
  sources : string[][];

  @Input()
  pageSize : number;

  @Input()
  page : number;

  @Input()
  total : number;

  constructor() { }

  ngOnInit() {
  } 

  hasAction() : boolean {
    return this.actions.length != 0;
  }
  
  triggerAction(source : string[], type : string) {
    let actionData : ActionData = {
      source : source,
      type : type
    }
    this.action.emit(actionData);
  }

  getPage(page : number) {
    this.changePage.emit(page);
  }
}

export interface ActionData {
  type : string;

  source : string[];
}

export interface LocalDataSource {
  
  data : string;

  columnId : string;

  image? : boolean;

}