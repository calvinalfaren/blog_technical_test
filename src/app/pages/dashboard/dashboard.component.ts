import {Component, OnInit, ViewEncapsulation, ViewChild, ChangeDetectorRef} from '@angular/core';
import {AppConfig} from '../../app.config';
import {DashboardService} from './dashboard.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../auth.service';
import {UserService} from '../../services/user.service';
import {UserStatisticResponse} from '../../models/user.model';
import { ILanguageListener, LanguageContent } from '../../models/language.model';
import {NgxSpinnerService} from 'ngx-spinner';
import {HttpErrorResponse} from '@angular/common/http';


@Component({
    selector: 'az-dashboard',
    encapsulation: ViewEncapsulation.None,
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    providers: [DashboardService]
})

export class DashboardComponent implements ILanguageListener, OnInit {
   public config: any;
   public configFn: any;
   public bgColor: any;
   public date = new Date();
   public weatherData: any;

   public userStatistic: UserStatisticResponse;

   firstName: string = this._authService.get("firstName");

   lastName: string;

   channelId: string;

   viewType: string;
   
   constructor(
      private _appConfig: AppConfig,
      private _router: Router,
      private _userService: UserService,
      private spinner: NgxSpinnerService,
      private _activatedRoute: ActivatedRoute,
      private _authService: AuthService,
      private _cdf:  ChangeDetectorRef,
   ) {
      this.config = this._appConfig.config;
      this.configFn = this._appConfig;
   }

   handleLanguageChange(languages: LanguageContent[]) {
   }

   ngOnInit() {
    this.getData();
    this._cdf.detectChanges();
   }

   getData() {
      this.spinner.show();
      this._userService.getMyInfo(this._authService.getToken()).subscribe((response) => {
         if (response.status === 203) {
            this._authService.logout();
            this._router.navigate(['/login-account']);
         }

         this.spinner.hide();
         this.firstName = response.data.firstName;
         this.lastName = response.data.lastName;
      }, (err: HttpErrorResponse) => {
         this.spinner.hide();

      });

   }
}
