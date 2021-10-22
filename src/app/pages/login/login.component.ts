import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';
import { LoginModel } from '../../models/user.model';
import { FormComponent } from '../../toolkit/form/form.component';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { getErrorMessage } from '../../error';
import { trigger, transition, style, animate } from '@angular/animations';
import { Md5 } from 'ts-md5/dist/md5';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie';
import { LanguageService } from '../../services/language.service';
import { ILanguageListener, LanguageContent } from '../../models/language.model';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
    selector: 'az-login',
    encapsulation: ViewEncapsulation.None,
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [
        trigger('fade', [
            // state('void', style({backgroundColor: 'yellow', opacity: 1})),
            transition(':enter', [
                style({ opacity: 0 }),
                animate(500)
            ]),

            transition(':leave', [
                animate(2000, style({ opacity: 0 }))
            ]),


        ])
    ]
})
export class LoginComponent implements ILanguageListener {
    uuidv1 = require('uuid/v1');

    error: string;

    readonly DEVICE_ID: string = this.uuidv1();
    readonly EMAIL: string = 'email';
    readonly PASSWORD: string = 'password';

    userKey = false;

    showSkltn = false;

    model: LoginModel;
    email: string;

    form: boolean = false;

    languageList: any[] = [];

    @ViewChild('form')
    formComponent: FormComponent;

    constructor(
        private _userService: UserService,
        private _authService: AuthService,
        private cookieService: CookieService,
        private translate: TranslateService,
        public __language: LanguageService,
        private _ngxSpinnerService: NgxSpinnerService,
        private _activatedRoute: ActivatedRoute,
        private _router: Router) {
        // this.__language.registerLanguageListener(this);
        // this.showSkltn = true;
        // this.__language.getLang().subscribe(() => {
        //   this.showSkltn = false;
        // });
      }

    chosenLanguageName: string;

    handleLanguageChange(languages: LanguageContent[]) {
        this.languageList = languages;
        this.chosenLanguage = this.languageList[0];
        this.__language.setupLanguage();
    }

    ngOnDestroy() {
        this.__language.unregisterLanguageListener(this);
    }

    ngOnInit() {
    //   this.model = new LoginModel;
    //   this._activatedRoute.params.subscribe((params) => {
    //     this.email = params['email'];
    //   });
      // this._ngxSpinnerService.show()
    }

    getRules(): Object {
        const json: Object = {};
        json[this.EMAIL] = [this.model.email, [Validators.required]];
        json[this.PASSWORD] = [this.model.password, [Validators.required]];
        return json;
    }

    getValidationMessages(): Object {
        const json: Object = {};
        json[this.DEVICE_ID] = this.uuidv1();
        json[this.EMAIL] = { 'required': 'Email is required' };
        json[this.PASSWORD] = { 'required': 'Password is required' };
        return json;
    }


    setErrorMessage() {
        this.error = "Enter Email address and Password";
        this.disabledBtn = false;
    }


    login(object: any) {
        let model = new LoginModel;
        model.deviceId = (this._authService.get('deviceId_' + object[this.EMAIL])) ?
            this._authService.get('deviceId_' + object[this.EMAIL]) : this.uuidv1();
        model.email = object[this.EMAIL];
        model.password = Md5.hashStr(object[this.PASSWORD]).toString();

        if (this.userKey) {
            model.rememberMe = true;
        } else {
            model.rememberMe = false;
        }

        this._userService.login(model).subscribe(response => {
            if (response.code === 'OK') {

                // STORE DEVICE ID FIRST
                this._authService.set('deviceId_' + model.email, model.deviceId);
                this._authService.email(model.email);

                if (response.data.need2FA === true) {
                    this._authService.userKey(response.data.userKey);
                    this._router.navigate(['/account-activate']);
                } else {
                    this._authService.userKey(response.data.userKey);
                    this._authService.deviceKey(response.data.deviceKey);
                    this._authService.fullName(response.data.user.firstName);
                }

                this._authService.loggedIn();
                return response;
            } else {
                let fieldLabel = document.querySelectorAll('.field-label');
                for (let i = 0; i < fieldLabel.length; i++) {
                    fieldLabel[i].classList.add('field-error');
                }
                this.error = getErrorMessage(response.code);
            }
            this.disabledBtn = false;
        },
            (err: HttpErrorResponse) => {
                this.error = getErrorMessage(err.error);
                this.disabledBtn = false;
            });
    }

    chosenLanguage: LanguageContent = new LanguageContent();

    changeLanguage(language: any) {
        this.translate.use(this.getLanguage(language.code));
        this.chosenLanguage = language;
    }

    getLanguage(event) {
        this.cookieService.put(this.__language.saveLanguage, event);
        return this.cookieService.get(this.__language.saveLanguage);
    }

    disabledBtn: boolean = false;

    disabled() {
        this.disabledBtn = true;
        // setTimeout(function () {
        //     this.disabledBtn = false;
        // }, 2000);
    }

    getLanguageName: string;

    getLanguageImage(language: LanguageContent) {
      if(!this.cookieService.get(this.__language.saveLanguage)) {
        return "./assets/img/icons/" + language.code + ".png";
      } else {
        for(let lang of this.languageList) {
          if(lang.code == this.cookieService.get(this.__language.saveLanguage)) {
            this.getLanguageName = lang.name;
          }
        }
        return "./assets/img/icons/" + this.cookieService.get(this.__language.saveLanguage) + ".png";
      }
    }

    getLanguageImageList(language: LanguageContent) {
      return "./assets/img/icons/" + language.code + ".png";
    }
}
