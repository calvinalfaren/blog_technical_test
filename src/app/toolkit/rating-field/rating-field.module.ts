import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingFieldComponent } from './rating-field.component';
import { BarRatingModule } from "ngx-bar-rating";

@NgModule({
  imports: [
    CommonModule, BarRatingModule
  ],
  declarations: [RatingFieldComponent],
  exports: [RatingFieldComponent]
})
export class RatingFieldModule { }
