import {Injectable} from '@angular/core';
import {AppSettings} from './app.setting';
import {Observable} from '../../node_modules/rxjs';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import 'rxjs/add/operator/map'
import { UserContent, AccountActivateContent } from "./models/user.model";
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';

@Injectable()
export class AuthService {

  readonly AUTH_LEVEL: string = "authLevel";

  constructor(
    private _httpClient: HttpClient,
    private _cookieService : CookieService,
    ) {
  }

  getAuthInfo() {
      let headers = new HttpHeaders().set('Content-Type', 'application/json');
      headers = headers.set('Authorization', 'Bearer ' + this.getToken());

      return this._httpClient.get('./api/auth/my-info', { headers: headers })
          .map((response: any) => response);
  }


  setAuthLevel(authLevel: string) {
    localStorage.setItem(this.AUTH_LEVEL, authLevel);
  }

  getAuthLevel() :  string {
    return localStorage.getItem(this.AUTH_LEVEL);
  }

  fullName(firstName?: string, lastName?: string) {
    localStorage.setItem(AppSettings.FIRST_NAME_STORAGE, firstName);
    if (lastName) localStorage.setItem(AppSettings.LAST_NAME_STORAGE, lastName);
  }

  login(token: string) {
    localStorage.setItem(AppSettings.TOKEN_STORAGE, token);
  }

  userKey(token: string) {
    localStorage.setItem(AppSettings.USER_KEY, token);
  }

  deviceId(token: string) {
    localStorage.setItem(AppSettings.DEVICE_ID, token);
  }

  deviceKey(token: string) {
    localStorage.setItem(AppSettings.DEVICE_KEY, token);
  }

  email(email: string) {
    localStorage.setItem(AppSettings.EMAIL, email);
  }

  getLocalStorageByKey(key: string) {
    return localStorage.getItem(key);
  }

  get(key: string) {
    return localStorage.getItem(key);
  }


  set(key: string, val: string) {
    return localStorage.setItem(key, val);
  }

  forgotDevice() {
    localStorage.removeItem('deviceId_' + this.get('email'));
  }

  logout() {
    localStorage.removeItem(AppSettings.TOKEN_STORAGE);
    // localStorage.removeItem(AppSettings.FIRST_NAME_STORAGE);
    // localStorage.removeItem(AppSettings.LAST_NAME_STORAGE);
    localStorage.removeItem(AppSettings.USER_KEY);
    // localStorage.removeItem(AppSettings.EMAIL);
    localStorage.removeItem(AppSettings.DEVICE_KEY);
    // this._shopService.notifyDataChange(null, null);
  }

  loggedIn(): boolean {
    return localStorage.getItem(AppSettings.USER_KEY) != null &&
      localStorage.getItem(AppSettings.DEVICE_KEY) != null;
  }

  getToken(): string {
    return localStorage.getItem(AppSettings.USER_KEY) + localStorage.getItem(AppSettings.DEVICE_KEY);
  }

  removeDeviceId(id: string): Observable<any> {

    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    headers = headers.set('Authorization', 'Bearer ' + this.getToken());

    return this._httpClient.delete('./api/auth/forget/' + id, {headers: headers})
        .map((response: any) => response)

  }


  getStoredUserList() : AccountActivateContent[] {
    let storedUsers = localStorage.getItem("users");
    return storedUsers ? JSON.parse(storedUsers) : [];
  }

  addStoredUserList(firstName: string, email: string) {
    let storedUsers = this.getStoredUserList();
    let exist = false;
    for(let storedUser of storedUsers) {
      if(storedUser.email.trim() == email.trim()) {
        exist = true;
        storedUser.firstName = firstName;
      }
    }

    if(!exist) {
      storedUsers.push({ firstName, email});
    }
    localStorage.setItem("users", JSON.stringify(storedUsers));
  }

}

export interface AuthResponse extends Response {
  authKey: string;
}
