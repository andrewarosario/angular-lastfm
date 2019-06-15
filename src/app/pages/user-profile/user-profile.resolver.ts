import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { LastfmService } from '../../services/lastfm/lastfm.service';

@Injectable({
  providedIn: 'root'
})
export class UserProfileResolver implements Resolve<User> {

  constructor(private lastfmService: LastfmService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<User> {
    return this.lastfmService.getUserInfo(route.params.user);
  }
}
