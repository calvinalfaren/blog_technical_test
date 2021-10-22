import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Dropdown2Component } from './dropdown2.component';
import { ToolkitModule } from '../toolkit.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, FormsModule
  ],
  declarations: [Dropdown2Component],
  exports: [Dropdown2Component]
})
export class Dropdown2Module { }
