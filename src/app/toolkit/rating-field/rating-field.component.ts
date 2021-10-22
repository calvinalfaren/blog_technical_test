import { Component, OnInit } from '@angular/core';
import { Field } from '../field';

@Component({
  selector: 'th-rating-field',
  templateUrl: './rating-field.component.html',
  styleUrls: ['./rating-field.component.scss']
})
export class RatingFieldComponent extends Field<number> implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
    
  }

  handleRatingChange(value) {
    this.setValue(value);
  }

}
