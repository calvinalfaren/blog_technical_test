import { RadioItemModel } from './../toolkit.model';
import { Component, OnInit, Input } from '@angular/core';
import { Field } from "./../field";
@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})
export class RadioComponent extends Field<string> implements OnInit {

  @Input()
  items : RadioItemModel[] = [];
  
  constructor() {
    super();
   }

  ngOnInit() {
  }

  handleRadioClick(value : string) {
    this.setValue(value);
  }

}
