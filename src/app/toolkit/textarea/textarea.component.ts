import { Component, OnInit, Input } from '@angular/core';
import { Field } from "./../field";
@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css']
})
export class TextareaComponent extends Field<string> implements OnInit {

  @Input()
  disabled : boolean = false;

  @Input()
  rows : number = 2;

  @Input()
  placeholder : string = "";
  
  constructor() { 
    super();
  }

  ngOnInit() {
  }

  handleKeyup(event : Event) {
    this.setValue(this.value);
  }
}

