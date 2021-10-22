import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTimePickerComponent } from './input-time-picker.component';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [InputTimePickerComponent],
    imports: [
        CommonModule, NgxMaterialTimepickerModule, FormsModule
    ],
    exports: [InputTimePickerComponent]
})
export class InputTimePickerModule { }
