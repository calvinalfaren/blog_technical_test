import {Component, OnInit, Input} from '@angular/core';
import {Field} from './../field';

@Component({
    selector: 'app-checkbox',
    templateUrl: './checkbox.component.html',
    styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent extends Field<number> implements OnInit {

    public static get ON_VALUE(): string { return 'on'; }

    public static get OFF_VALUE(): string { return 'off'; }

    @Input()
    disabled: boolean = false;

    constructor() {
        super();
    }

    ngOnInit() {
    }

    handleChange(event: Event) {
        if (event && event.target) {
            this.setValue((<HTMLInputElement>event.target).checked ? 1 : 0);
        }
    }
}
