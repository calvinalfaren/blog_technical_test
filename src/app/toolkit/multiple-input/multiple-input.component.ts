import { Component, OnInit } from '@angular/core';
import { Field } from './../field';

@Component({
  selector: 'app-multiple-input',
  templateUrl: './multiple-input.component.html',
  styleUrls: ['./multiple-input.component.scss']
})
export class MultipleInputComponent extends Field<string[]> implements OnInit {

  input : string;

  handleInputChange(input : string) {
    this.input = input;
    let lastChar = input[input.length - 1];
    if(lastChar == " ") {
      let index  = this.value.indexOf(input.trim());
      if(index == -1 && input.trim() != "") this.value.push(this.input.trim());
      this.input = "";
    }
  }

  constructor() { 
    super();
    this.value = [];
  }
  
  removeInput(text : string) {
    let index = this.value.indexOf(text);
    if(index != -1) this.value.splice(index, 1);
  }

  ngOnInit(): void {
  }

}
