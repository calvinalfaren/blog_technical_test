import { AppGuard } from './app.guard';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [

  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  {
    path: 'pages', loadChildren: 'app/pages/pages.module#PagesModule',
    canActivate: [AppGuard]
  },
  { path: 'post', loadChildren: 'app/pages/home/home.module#HomeModule' },
  { path: 'login', loadChildren: 'app/pages/login/login.module#LoginModule' },
  // { path: 'account-activate', loadChildren: 'app/pages/account-activate/account-activate.module#AccountActivateModule' },
  // { path: 'login-account', loadChildren: 'app/pages/login-account/login-account.module#LoginAccountModule' },
  // { path: 'forgot-password', loadChildren: 'app/pages/forgot-password/forgot-password.module#ForgotPasswordModule' },
  // { path: 'reset-password', loadChildren: 'app/pages/reset-password/reset-password.module#ResetPasswordModule' },

];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {
  preloadingStrategy: PreloadAllModules,
  // useHash: true
});
