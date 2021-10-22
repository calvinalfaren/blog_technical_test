import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie';
import { LANGUAGE_LIST } from "../utils/language";
import { HttpHeaders, HttpParams, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../auth.service';
import { LanguageContent, LanguageResponse, ILanguageListener } from '../models/language.model';
import { of } from 'rxjs';

@Injectable()
export class LanguageService {

  languages: LanguageContent[] = [];

  listeners: ILanguageListener[] = [];

  notifyDataChange(languages: LanguageContent[]) {
    this.languages = languages;
    this.listeners.forEach((listener: ILanguageListener) => listener.handleLanguageChange(languages));
  }

  registerLanguageListener(listener: ILanguageListener) {
    this.listeners.push(listener);
  }

  unregisterLanguageListener(listener: ILanguageListener) {
    let index = this.listeners.indexOf(listener);
    if(index > -1) this.listeners.splice(index, 1);
  }

  saveLanguage: string = '__language';
  
  constructor(public translate: TranslateService,
    private _httpClient : HttpClient,
    private _authService: AuthService,
    private cookieService : CookieService) { }

  setLanguages(languages: LanguageContent[]) {
    this.languages = languages;
  }


  getLang(): Observable<LanguageResponse> {
    if(this.languages.length > 0) {
      let response = new LanguageResponse;
      response.data = this.languages;
      this.setupLanguage();
      this.notifyDataChange(this.languages);
      return of(response);
    }
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    headers = headers.set('Authorization', 'Bearer ' + this._authService.getToken());
    headers = headers.set('Language', 'en_US');

    return this._httpClient.get("./api/general/language", { headers: headers })
      .map((response: any) => response)
      .do((response: LanguageResponse) => {
        if (response && response.data) {
          this.setupLanguage();
          this.notifyDataChange(response.data);
        }
      });;

  }
  

  getLocatinLanguage(): string {
    const browserLang = this.translate.getBrowserLang();
    return browserLang;
  }
  
  getCurrentLanguage() : LanguageContent {
    let code = this.cookieService.get(this.saveLanguage);
    if(code) {
      for (let language of this.languages) {
        if(language.code == code) return language;
      }
    }
    return this.languages[0];
  }

  getLanguageCodes() : string[] {
    let languageCodes = [];
    for(let language of this.languages) {
      languageCodes.push(language.code);
    }
    return languageCodes;
  }

  setupLanguage() {
    if(this.languages.length == 0) return;
    let languageCodes = this.getLanguageCodes();
    this.translate.addLangs(languageCodes);
    let savedLanguage = this.cookieService.get(this.saveLanguage);
    if(savedLanguage) {
      if(languageCodes.indexOf(savedLanguage) != -1) {
        this.translate.use(savedLanguage);
      } else {
        this.translate.use(this.languages[0].code);
      }
    } else {
      this.translate.setDefaultLang(this.getLocatinLanguage());
      this.translate.use(this.languages[0].code);
    }
  }

}
