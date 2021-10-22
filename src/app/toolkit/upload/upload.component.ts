import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FileService } from '../../file.service';
import { Field } from '../field';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'th-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent extends Field<string> implements OnInit {

  @ViewChild('file')
  fileElementRef: ElementRef;

  @Output()
  file: EventEmitter<string> = new EventEmitter<string>();

  @Input()
  autoDelete: boolean = false;

  @Input()
  autoHide : boolean = true;

  @Input()
  prefix: string = "common";

  constructor(private _fileService: FileService,
      private _authService : AuthService) {
    super();
   }

  ngOnInit() {
  }

  @Input()
  fileType: string = '';

  upload() {
    this._fileService.uploadFile(this.prefix, this.fileElementRef.nativeElement.files[0]).subscribe(response => {
      let fileResponse: string = response.data.value;
      if (fileResponse) {
        this.setValue(fileResponse);
        this.file.emit(fileResponse);
      }
      // this.setValue(null);
    });
  }

  clearData() {
    this.setValue(null);
    this.fileElementRef.nativeElement.value = null;
  }
  
  getFileUrl() {
    if(!this.getValue()) {
      return "";
    }
    let path = this._fileService.generateDownloadPath(this.getValue(), this._authService.getToken());
    return path;
  }

}
