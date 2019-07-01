import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from 'src/app/services/lastfm/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RequireTokenGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const result = this.authService.key !== null;

    if (!result) {
      this.router.navigate(['/']);
    }

    return result;
  }
}
