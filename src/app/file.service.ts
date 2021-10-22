import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppSettings } from './app.setting';
import { Observable } from 'rxjs/Observable';
import { FileResponse } from './models/file.model';
import { AuthService } from './auth.service';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private http: HttpClient, private _authService: AuthService) {
  }

  generateImagePathById(id: string): string {
    if (id == '0' || !id) {
      return '/assets/img/app/no-image.png';
    }
    return AppSettings.GET_IMAGE_BY_ID + '?id=' + id;
  }

  generatePathByIdToken(id: string, token: string) {
    return AppSettings.GET_IMAGE_BY_TOKEN + id + '&authKey=' + token;
  }

  generateDownloadPath(id: string, token?: string) {
    return AppSettings.DOWNLOAD_FILE + id + "&authKey=" + token;
  }

  printFile(id: string) {

    window.open(AppSettings.DOWNLOAD_FILE + id, '_blank');

    // this._http.get(AppSettings.DOWNLOAD_FILE + id, {
    //   responseType: ResponseContentType.Blob
    // }).subscribe(
    //   (response) => {
    //     var blob = new Blob([response.blob()], {type: 'application/pdf'});
    //     const blobUrl = URL.createObjectURL(blob);
    //     const iframe = document.createElement('iframe');
    //     iframe.style.display = 'none';
    //     iframe.src = blobUrl;
    //     document.body.appendChild(iframe);
    //     iframe.contentWindow.print();
    //   });
  }


  uploadFile(prefix: string, file: File): Observable<FileResponse> {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + this._authService.getToken());
    let formData: FormData = new FormData();
    formData.append('file', file);
    formData.append('prefix', prefix);
    return this.http.post("./api/upload/all", formData, { headers: headers })
      .map((response: FileResponse) => response)
  }

  uploadImage(prefix: string, file: File): Observable<FileResponse> {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + this._authService.getToken());
    let formData: FormData = new FormData();
    formData.append('file', file);
    formData.append('prefix', prefix);
    return this.http.post("./api/upload/compress", formData, { headers: headers })
      .map((response: FileResponse) => response)
  }
}
