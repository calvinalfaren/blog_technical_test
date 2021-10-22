import {Component, OnInit, Input, forwardRef} from '@angular/core';
import {Field} from './../field';
import {ViewEncapsulation} from '@angular/core';


@Component({
    selector: 'app-input-arrow',
    templateUrl: './input-arrow.component.html',
    styleUrls: ['./input-arrow.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class InputArrowComponent extends Field<string> implements OnInit {

    @Input()
    placeholder: string;

    @Input()
    type: string;

    @Input()
    inputClass: string = 'input full';

    @Input()
    disabled: boolean = false;

    constructor() {
        super()
    }

    ngOnInit() {
    }

}
