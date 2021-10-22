import { CKEditorModule } from 'ng2-ckeditor';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { InputArrowComponent } from './input-arrow/input-arrow.component';
import { InputOtpComponent } from './input-otp/input-otp.component';
import { FormComponent } from './form/form.component';
import { ButtonComponent } from './button/button.component';
import { TextareaComponent } from './textarea/textarea.component';
import { TableComponent } from './table/table.component';
import { ModalComponent } from './modal/modal.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import {} from "@angular/cdk";
import { SearchComponent } from './search/search.component';
import { QuantityFieldComponent } from './quantity-field/quantity-field.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabsItemComponent } from './tabs-item/tabs-item.component';
import { PaginationComponent } from './pagination/pagination.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { RadioComponent } from './radio/radio.component';
import { NgxPaginationModule } from "ngx-pagination";
import { CkeditorComponent } from './ckeditor/ckeditor.component';
import {DirectivesModule} from '../theme/directives/directives.module';
import { ColorPickerModule } from '@iplab/ngx-color-picker';

@NgModule({
  imports: [
    CommonModule, FormsModule, NgxPaginationModule,
    ReactiveFormsModule,
    CKEditorModule, DirectivesModule, 
    ColorPickerModule
  ],
  declarations: [InputComponent, InputArrowComponent, InputOtpComponent, FormComponent, ButtonComponent,
    TextareaComponent, TableComponent, ModalComponent, 
    ConfirmDialogComponent, SearchComponent, 
    QuantityFieldComponent, TabsComponent, TabsItemComponent,
    PaginationComponent, 
    DropdownComponent, CheckboxComponent, RadioComponent, CkeditorComponent],
  exports: [InputComponent, InputArrowComponent, InputOtpComponent, FormComponent, ButtonComponent, DropdownComponent, CheckboxComponent,
    TextareaComponent, TableComponent, ModalComponent, QuantityFieldComponent,
    CkeditorComponent, 
    TabsComponent, TabsItemComponent, CheckboxComponent, RadioComponent,
    ConfirmDialogComponent, SearchComponent]
})
export class ToolkitModule { }
