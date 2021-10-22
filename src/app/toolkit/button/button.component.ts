import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

    public static get BUTTON_LINK(): string {
        return 'button-link';
    }

    /**
     * Deprecated
     */
    @Input()
    class: string = 'button primary full';

    @Input()
    btnClass: string = 'button primary full';

    @Input()
    icon: string = null;

    @Input()
    disabled: boolean = false;

    @Input()
    type: string = 'button';

    constructor() {
    }

    ngOnInit() {
    }

    setDisabled(disabled: boolean) {
        this.disabled = disabled;
    }
}
