import { DropdownResponse, DropdownItemModel } from './../toolkit.model';
import { AuthService } from './../../auth.service';
import { DropdownService } from './dropdown.service';
import { Component, OnInit, HostListener, Output,
    Input, ViewEncapsulation, EventEmitter } from '@angular/core';
import { Field } from "./../field";
import { ChangeDetectorRef } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  providers: [DropdownService, AuthService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownComponent extends Field<string> implements OnInit {
  
  @Input()
  placeholder : string;

  @Input()
  text : string = null;
  
  @Output()
  textChange : EventEmitter<string> = new EventEmitter<string>();

  @Input()
  items : DropdownItemModel[] = [];

  dropdownOpened : boolean = false;

  constructor(private dropdownService : DropdownService, 
            private _cdf : ChangeDetectorRef,
            private authService : AuthService) { 
    super();
  }

  ngOnInit() {
    
  }

  toggleDropdown(event : Event) {
    this.dropdownOpened = !this.dropdownOpened;
    this._cdf.detectChanges();
  }

  triggerDropdownItemClick(item : DropdownItemModel) {
    this.setValue(item.value);
    this.text = item.text;
    this.textChange.emit(this.text);
    this.dropdownOpened = false;
    this._cdf.detectChanges();
  }
}
