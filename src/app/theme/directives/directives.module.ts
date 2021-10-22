import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {Widget} from './widget/widget.directive';
import {Counter} from './counter/counter.directive';
import {LiveTile} from './live-tile/live-tile.directive';
import {ProgressAnimate} from './progress-animate/progress-animate.directive';
import {DropzoneUpload} from './dropzone/dropzone.directive';
import {DragDropDirective} from './drag-drop-upload/drag-drop.directive';
import {DigitOnlyDirective} from './digit-only/digit-only.directive';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    Widget,
    Counter,
    LiveTile,
    ProgressAnimate,
    DropzoneUpload,
    DragDropDirective,
    DigitOnlyDirective
  ],
  exports: [
    Widget,
    Counter,
    LiveTile,
    ProgressAnimate,
    DropzoneUpload,
    DragDropDirective,
    DigitOnlyDirective
  ]
})
export class DirectivesModule {
}
