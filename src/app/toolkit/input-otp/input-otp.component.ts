import {Component, OnInit, Input, forwardRef, ViewChild, ElementRef, Output, EventEmitter} from '@angular/core';
import {Field} from './../field';
import {ViewEncapsulation} from '@angular/core';


@Component({
    selector: 'app-input-otp',
    templateUrl: './input-otp.component.html',
    styleUrls: ['./input-otp.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class InputOtpComponent extends Field<string> implements OnInit {

    @Input()
    placeholder: string;

    @Input()
    type: string;

    @Input()
    inputClass: string = 'input-otp';

    @Input()
    disabled: boolean = false;

    @Output()
    change: EventEmitter<any> = new EventEmitter<any>();

    constructor() {
        super()
    }

    ngOnInit() {}

    onChange(event) {
        super.onChange(event);
        this.change.emit(event);
    }
    
    @ViewChild("input")
    input : ElementRef;

    setFocus() {
        this.input.nativeElement.focus();
    }

}
