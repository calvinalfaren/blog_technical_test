import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {CookieService} from 'ngx-cookie';

@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.scss']
})
export class TranslateComponent implements OnInit {

  saveLanguage: string = '__language';

  constructor(public translate: TranslateService, private cookieService: CookieService) {

    translate.addLangs(['en'.toLowerCase(), '中文']);


    let getSaveLanguage = cookieService.get(this.saveLanguage);


    if (getSaveLanguage) {

      if ((getSaveLanguage === 'en_US') || getSaveLanguage === '中文') {
        translate.use(getSaveLanguage)
      } else {
        translate.setDefaultLang('en_US');
      }
    } else {
      translate.setDefaultLang(this.getLocatinLanguage());
    }

    // const browserLang = translate.getBrowserLang();
    // translate.use(browserLang.match(/en|中文/) ? browserLang : localStorage.getItem(this.saveLanguage));

  }

  ngOnInit() {
  }


  getLanguage(event) {
    this.cookieService.put(this.saveLanguage, event);
    return this.cookieService.get(this.saveLanguage);
  }

  getLocatinLanguage(): string {
    let language = 'en_US';

    const browserLang = this.translate.getBrowserLang();
    if (browserLang === 'zh_CN')
      language = '中文';
    return language;
  }
}
