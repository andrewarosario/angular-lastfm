import { Component, OnInit, ElementRef } from '@angular/core';
import { ROUTES } from '../sidebar/sidebar.component';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/lastfm/auth/auth.service';
import { UserService } from 'src/app/services/lastfm/user/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public focus;
  public listTitles: any[];
  public location: Location;

  user: User;

  constructor(
    location: Location,
    private element: ElementRef,
    private router: Router,
    private userService: UserService,
    private authService: AuthService
  ) {
    this.location = location;
  }

  ngOnInit() {
    this.listTitles = ROUTES.filter(listTitle => listTitle);

    this.getUserInfo();

    this.authService.onAuth.next();

  }

  getTitle() {
    let titlee = this.location.prepareExternalUrl(this.location.path());
    if (titlee.charAt(0) === '#') {
        titlee = titlee.slice( 2 );
    }
    for (let item = 0; item < this.listTitles.length; item++) {
        if (this.listTitles[item].path === titlee) {
            return this.listTitles[item].title;
        }
    }
    return 'Dashboard';
  }

  logout() {
    localStorage.removeItem('key');
    localStorage.removeItem('name');
    this.authService.onAuth.next();
    this.router.navigate(['/']);
  }

  private getUserInfo() {
    this.authService.onAuth.subscribe(() => {
      this.userService
        .getUserInfo(this.authService.userName)
        .then(response => this.user = response)
        .catch(() => { this.user = undefined; });
    });
  }

}
