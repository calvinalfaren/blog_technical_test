import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input()
  pageSize : number = 10;

  @Input()
  page : number = 0;

  @Input()
  url : string;

  @Input()
  reload : boolean;

  constructor() { }

  ngOnInit() {
  }

}
