import {AuthService} from './auth.service';
import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';

@Injectable()
export class AppGuard implements CanActivate {

  constructor(protected router: Router, protected authService: AuthService) {
  }

  canActivate() {
    if (this.authService.loggedIn()) {
      // logged in so return true
      return true;
    }
    // not logged in so redirect to login page
    else{
      this.router.navigate(['/post']);
    }

    return false;
  }
}
