import { AuthService } from './../../auth.service';
import { Component, OnInit, TemplateRef, Input } from '@angular/core';
import { Field } from '../field';
import { DropdownItemModel } from '../toolkit.model';
import { ContentChild } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { HostListener } from '@angular/core';
import { AppSettings } from '../../app.setting';

@Component({
  selector: 'app-dropdown2',
  templateUrl: './dropdown2.component.html',
  styleUrls: ['./dropdown2.component.scss']
})
export class Dropdown2Component extends Field<any> implements OnInit {

  @Input()
  placeholder : string;

  @Input()
  text : string = null;
  
  @Output()
  textChange : EventEmitter<string> = new EventEmitter<string>();

  @Input()
  items : any[] = [];

  dropdownOpened : boolean = false;

  @Input()
  initFirstItem : boolean = false;

  @Input()
  valueIndex : string;

  @Input()
  id : string;

  @Input() 
  maxHeight: number = 250;

  @Input()
  input: boolean = false;

  @Input()
  search: string = "";

  @Output()
  searchChange: EventEmitter<any> = new EventEmitter<any>();

  @Input()
  searchPlaceholder: string = "Search..";

  // add new modules
  @Input()
  addNewText : string = "";

  @Input()
  enableAddNew : boolean = false;

  addNewMode : boolean = false;

  addNewInput : string;

  @Output()
  addNewEvent : EventEmitter<string> = new EventEmitter<string>();
 
  triggerAddNewEvent() {
    this.setAddNewMode(false);
    this.addNewEvent.emit(this.addNewInput);
  }

  @Input()
  textIndex: string = "text";

  @Input()
  addNewPlaceholder : string = "";

  @ContentChild(TemplateRef)
  public itemTemplate: TemplateRef<any>;

  constructor(private authService : AuthService) { 
    super();
  }

  setAddNewMode(mode : boolean) {
    this.addNewMode = mode;
    this.dropdownOpened = false;
  }

  ngOnInit() {
    if(this.initFirstItem) {
      this.triggerDropdownItemClick(this.items[0], this.items[0][this.textIndex], this.id);
    }
  }

  toggleDropdown(event : Event, id) {
    if(this.disabled) return;
    this.dropdownOpened = !this.dropdownOpened;
    let changeBorder = document.getElementById("change-border" + id);
    if(!changeBorder) return;
    if(changeBorder.classList.contains("default")) {
      changeBorder.classList.add("border-purple");
      changeBorder.classList.remove("default");
    } else {
      changeBorder.classList.remove("border-purple");
      changeBorder.classList.add("default");
    }
  }

  openDropdown(event : Event) {
    this.dropdownOpened = true;
    event.preventDefault();
  }

  closeDropdown(event : Event, id) {
    this.dropdownOpened = false;
    event.preventDefault();
    let changeBorder = document.getElementById('change-border' + id);
    if(!changeBorder) return;
    changeBorder.classList.remove("border-purple");
  }

  triggerDropdownItemClick(item : any, text : string, id) {
    let value = this.valueIndex ? item[this.valueIndex] : item;
    this.setValue(value);
    this.setText(text);
    this.dropdownOpened = false;
    let changeBorder = document.getElementById("change-border" + id);
    if(!changeBorder) return;
    if(changeBorder.classList.contains("default")) {
      changeBorder.classList.add("border-purple");
      changeBorder.classList.remove("default");
    } else {
      changeBorder.classList.remove("border-purple");
      changeBorder.classList.add("default");
    }
  }

  setText(text : string) {
    this.text = text;
    this.textChange.emit(text);
  }

  @Input()
  disabled: boolean = false;

  @HostListener('document:click', ['$event'])
  handleDocumentClick(event : Event) {
    if(event.target && !(<HTMLElement>event.target).closest(".dropdown-wrapper")) {
      this.dropdownOpened = false;
      let changeBorder = document.getElementById("change-border" + this.id);
      if(!changeBorder) return;
      changeBorder.classList.remove("border-purple");
      changeBorder.classList.add("default");
    }
  }

  @HostListener('document:keydown', ['$event'])
  handleMousedown(event : KeyboardEvent) {
    if(event.keyCode == AppSettings.DOWN_KEY && this.dropdownOpened) {
    }
  }
}
