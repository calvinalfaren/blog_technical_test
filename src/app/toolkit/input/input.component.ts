import {Component, OnInit, Input, Output, forwardRef, EventEmitter} from '@angular/core';
import {Field} from './../field';
import {ViewEncapsulation} from '@angular/core';


@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class InputComponent extends Field<string> implements OnInit {

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

    @Input()
    min: number;

    @Input()
    max: number;

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
}
