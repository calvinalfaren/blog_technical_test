import { Component, OnInit } from '@angular/core';
import { Field } from "./../field";

@Component({
  selector: 'app-quantity-field',
  templateUrl: './quantity-field.component.html',
  styleUrls: ['./quantity-field.component.css']
})
export class QuantityFieldComponent extends Field<number> implements OnInit {

  defaultValue : number = 1;

  min : number = 1;

  constructor() {
    super();
   }

  ngOnInit() {
    if(!this.value) {
      this.value = this.defaultValue;
    }
  }

  add(event : Event) {
    this.value = parseInt(this.value + "") + 1;
    this.change(event);
  }

  remove(event : Event) {
    this.value -= 1;
    this.change(event);
  }

  change(event : Event) {
    this.value = (this.value <= this.min) ? this.min : this.value;
  }

}
