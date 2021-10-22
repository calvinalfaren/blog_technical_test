import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoginComponent} from './login.component';
import {UserService} from '../../services/user.service';
import { SharedModule } from '../../shared/shared.module';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { LanguageService } from '../../services/language.service';

export const routes = [
{
  path: '',
  component: LoginComponent,
},
{
  path: ':email',
  component: LoginComponent
},
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    SharedModule,
    NgxSkeletonLoaderModule
  ],
  declarations: [LoginComponent],
  providers: [UserService, LanguageService]
})

export class LoginModule {
}
