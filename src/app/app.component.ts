import {Component, ViewEncapsulation} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'az-root',
  encapsulation: ViewEncapsulation.None,
  template: `
    <ngx-spinner bdColor="rgba(255,255,255,255)"
                 size="medium"
                 color="#7079FF"
                 type="ball-circus"
    ></ngx-spinner>
    <router-outlet></router-outlet>`,
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
 /* constructor(private spinner: NgxSpinnerService) { }
  ngOnInit() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 2000);
  }*/
}
