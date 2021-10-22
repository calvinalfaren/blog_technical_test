import { AuthService } from './../auth.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private _httpClient: HttpClient,
              private _authService: AuthService) { }

  getPost(): Observable<any> {
    return this._httpClient.get('./api/posts')
        .map((response: any) => response);
  }

  getDetailPost(id: string): Observable<any> {
    return this._httpClient.get('./api/post/' + id)
        .map((response: any) => response);
  }

  getCommentPost(id: string, page: number): Observable<any> {

    let params : HttpParams = new HttpParams()
      .set("page", page + "");

    return this._httpClient.get('./api/post/' + id + '/comments', {params: params})
        .map((response: any) => response);
  }

  addCommentPost(id: string, inputComment: string): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    headers = headers.set('Authorization', 'Bearer ' + this._authService.getToken());
    let model = {
      name: "Calvin Alfaren",
      comment: inputComment
    }

    return this._httpClient.post('./api/post/' + id + '/comments', model)
        .map((response: any) => response);
  }

  // nextCommentPost(): Observable<any> {
  //   return this._httpClient.get('./api/post/' + id + '/comments')
  //       .map((response: any) => response);

  // }

}
