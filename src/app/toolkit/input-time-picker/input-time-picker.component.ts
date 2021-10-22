import {Component, OnInit, Input, Output, forwardRef, EventEmitter, ViewChild} from '@angular/core';
import {Field} from './../field';
import {ViewEncapsulation} from '@angular/core';
import { InputComponent } from '../input/input.component';


@Component({
    selector: 'app-input-time-picker',
    templateUrl: './input-time-picker.component.html',
    styleUrls: ['./input-time-picker.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class InputTimePickerComponent extends Field<string> implements OnInit {

    @ViewChild("input")
    inputComponent: HTMLInputElement;

    @Input()
    placeholder: string;

    @Input()
    type: string;

    @Input()
    inputClass: string = 'input full';

    @Input()
    disabled: boolean = false;

    @Output()
    error: EventEmitter<string> = new EventEmitter<string>()

    constructor() {
        super()
    }

    ngOnInit() {
    }

    setErrorMessage(message) {
        if(message){
            this.error.emit(message);
            this.errorMessage = message;
        }

     }

     getValue() {
        return this.inputComponent.value;
     }
     
     handleTimeSet(timeSet: string) {
         this.setValue(timeSet);
     }
}
