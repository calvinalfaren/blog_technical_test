import { Component, OnInit } from '@angular/core';
import { Field } from './../field';

@Component({
  selector: 'app-input-otp2',
  templateUrl: './input-otp2.component.html',
  styleUrls: ['./input-otp2.component.scss']
})
export class InputOtp2Component extends Field<string> implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
