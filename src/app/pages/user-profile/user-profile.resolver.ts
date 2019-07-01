import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { UserService } from 'src/app/services/lastfm/user/user.service';

@Injectable({
  providedIn: 'root'
})
export class UserProfileResolver implements Resolve<User> {

  constructor(private userService: UserService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<User> {
    return this.userService.getUserInfo(route.params.user);
  }
}
