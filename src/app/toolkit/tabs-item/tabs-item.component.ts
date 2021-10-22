import { element } from 'protractor';
import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-tabs-item',
  templateUrl: './tabs-item.component.html',
  styleUrls: ['./tabs-item.component.css']
})
export class TabsItemComponent implements OnInit {

  @Input()
  title : string;

  @Input()
  index : string;

  constructor(private elementRef : ElementRef) { }

  ngOnInit() {
  }

  getTitle() : string {
    return this.title;
  }

  getIndex() : string {
    return this.index;
  }

  getElement() : string {
    return this.elementRef.nativeElement.innerHTML;
  }
}
