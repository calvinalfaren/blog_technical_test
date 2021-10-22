import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UploadComponent} from './upload.component';
import {FileService} from '../../file.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UploadComponent],
  exports: [UploadComponent],
  providers:[FileService]

})
export class UploadModule { }
