import {Component, Input, OnInit} from '@angular/core';
import { Field } from "./../field";

@Component({
  selector: 'app-ckeditor',
  templateUrl: './ckeditor.component.html',
  styleUrls: ['./ckeditor.component.scss']

})
export class CkeditorComponent extends Field<string> implements OnInit {

  @Input()
  config;

  constructor() {
    super();

  }

  ngOnInit() {
  }

  handleChange(event : Event) {
    this.onChange(event);
  }
}
