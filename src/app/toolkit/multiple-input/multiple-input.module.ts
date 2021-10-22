import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultipleInputComponent } from './multiple-input.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [MultipleInputComponent],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [MultipleInputComponent]
})
export class MultipleInputModule { }
