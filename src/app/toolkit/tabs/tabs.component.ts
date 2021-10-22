import { TabsItemComponent } from './../tabs-item/tabs-item.component';
import { Component, OnInit, Input, 
       ContentChildren, QueryList } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  @ContentChildren('item')
  items : QueryList<TabsItemComponent>;

  @Input()
  currentTabIndex : number = 0;

  constructor() { }

  ngOnInit() {
  }

  getTitles() : string[] {
    let titles : string[] = [];
    this.items.forEach(function(item, index) {
      titles.push(item.getTitle());
    });
    return titles;
  }

  clickTab(tabIndex : number) {
    this.currentTabIndex = tabIndex;
  }
}
