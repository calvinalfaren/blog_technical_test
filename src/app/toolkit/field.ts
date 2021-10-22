import {Input, Output, EventEmitter} from '@angular/core';
import {ControlValueAccessor} from '@angular/forms';

export abstract class Field<T> implements ControlValueAccessor {

    @Input()
    value: T;

    @Input()
    errorMessage: string;

    @Input()
    name: string;

    @Output()
    valueChange: EventEmitter<T> = new EventEmitter<T>();

    public getValue(): T {
        return this.value;
    }

    public getName(): string {
        return this.name;
    }

    public setValue(value: T) {
        this.value = value;
        this.valueChange.emit(this.value);
        this.propagateChange(value);
    }

    public setErrorMessage(message: string) {
        this.errorMessage = message;
    }

    // we use it to emit changes back to the form
    private propagateChange = (_: T) => {};

    // this is the initial value set to the component
    public writeValue(value: T) {
        if (value) {
            this.value = value;
        }
    }

    // registers 'fn' that will be fired when changes are made
    // this is how we emit the changes back to the form
    public registerOnChange(fn: (_: T) => {}) {
        this.propagateChange = fn;
    }

    // not used, used for touch input
    public registerOnTouched() {}

   /* removeErrorClass() {
        document.querySelector('.input-error').classList.remove('input-error');
    }*/

    public onChange(event) {
        // this.removeErrorClass();
        this.propagateChange(this.value);
        this.valueChange.emit(this.value);

    }
}
